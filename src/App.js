import React, { useState} from 'react';
//import Person from "./components/Person/Person.jsx";
import Persons from "./components/Person/Persons.jsx";
//import myStyles from "./AppStyle.jsx";
import Header from "./components/common/Headers.jsx";
import useStyles from "./AppStyle.jsx";
import NewPerson from './components/NewPerson/NewPerson.jsx';
import { ToastContainer, toast } from 'react-toastify';
import {Button }from '@material-ui/core';
const App = () => {
   
      const classes = useStyles()

      const [getPersons, setPersons] = useState([]);
      const [getSinglePerson, setSinglePerson] = useState("");
      const [getShowPersons, setShowPersons] = useState(true);
  
      const handleShowPerson = () => {
          setShowPersons(!getShowPersons);
      };
  
      const handleDeletePerson = id => {
          const persons = [...getPersons];
          const filteredPersons = persons.filter(p => p.id !== id); //! = =
          setPersons(filteredPersons);
      };
  
      const handleNameChange = (event, id) => {
          const allPersons = getPersons;
  
          const personIndex = allPersons.findIndex(p => p.id === id);
          const person = allPersons[personIndex];
          person.fullname = event.target.value;
  
          const persons = [...allPersons];
  
          persons[personIndex] = person;
          setPersons(persons);
      };
  
      const handleNewPerson = () => {
          const persons = [...getPersons];
          const person = {
              id: Math.floor(Math.random() * 1000),
              fullname: getSinglePerson
          };
  
          if (person.fullname !== "" && person.fullname !== " ") {
              persons.push(person);
              setPersons(persons);
              setSinglePerson("");
          }
      };
  
      const setPerson = event => {
          setSinglePerson(event.target.value);
      };
  
      let person = null;
  
      if (getShowPersons) {
          person = (
              <Persons
                  persons={getPersons}
                  nameChange={handleNameChange}
                  deletePerson={handleDeletePerson}
              />
          );
      }
    return (  
        <>
       
         <div className={classes.all}>
        <Header appTitle="Customer Manager"
             persons={getPersons}
             person={getSinglePerson}
        />
         <NewPerson 
              newPerson={handleNewPerson}
                person={getSinglePerson}
                setPerson={setPerson}
         />
          <Button 
             className={classes.showBtn}
             // Using this event I switch users(hide , unhide, hide, unhide)
             onClick={handleShowPerson}
             //   className={classes.root}
             variant="contained"
             > 
             Show Customers 
             </Button>
         <ToastContainer />
        {person}
        </div>
        </>


    )}

 
export default App;