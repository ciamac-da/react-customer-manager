import React, { useState } from 'react';
//import Person from "./components/Person/Person.jsx";
import Persons from "./components/Person/Persons.jsx";
//import myStyles from "./AppStyle.jsx";
import Header from "./components/common/Headers.jsx";
import myStyles from "./AppStyle.jsx";
import { ToastContainer, toast } from 'react-toastify';
import SimpleContext from './context/SimpleContext';
import NewPerson from './components/NewPerson/NewPerson.jsx';
import ShowPerson from './components/ShowPerson/ShowPerson';
import useStyles from './components/common/HeadersStyle';


const App = () => {

   const [getPersons, setPersons] = useState({persons:[]});
   const [getSinglePerson, setSinglePerson] = useState({person:""})
   const [getShowPersons, setSHowPersons] = useState({showPersons: false})

   
    // Switch show person off/on
   const handleShowPerson = () =>{
        //this.setState({showPersons: !this.state.showPersons})
        setSHowPersons({showPersons: !getShowPersons})
    }
   // To save person!
   const handleSavePerson = () =>{
        setSHowPersons({showPersons: !getShowPersons})
    }

    // To delete every single user!
   const handleDeletePerson = id =>{
        // to get a copy of customers list
        const persons = [...getPersons]
        const filteredPersons = persons.filter(p => p.id !== id)
        setPersons({persons: filteredPersons})
        
        // t acceess to person and passing it inside of toastify message
        const personIndex = persons.findIndex(p => p.id === id);
        const person = persons[personIndex]
        toast.error(`${person.fullname} was deleted successfully!`,{
        position:"bottom-right"
        })
    }

   const handleNameChange = (id)=>{
        const {persons : allPersons} = getPersons;
        const personIndex = allPersons.findIndex(p => p.id === id);
        const person = allPersons[personIndex]
        // to get a copy of all persons
        const persons = [...allPersons];
        // overwrite the names
        persons[personIndex] = person;
        setPersons({persons});
    }

 const handleNewPerson = () => {
      const persons = [...getPersons]
      const person ={
          id : Math.floor(Math.random() * 1000),
          fullname : getSinglePerson
      } 
      if(person.fullname !== "" && person.fullname !== " "){
          persons.push(person)
          setPersons({persons})
          setSinglePerson({person:""})
          
          //toastify new person
          toast.success(`${person.fullname} was added successfully`,{
            position: "bottom-right",  
            closeButton: true,
          });
      }
  };

 const setPerson = event => {
      setSinglePerson({ person: event.target.value})
  }

  let person = null;
  if(getShowPersons){
      person =  <Persons/>
  }
      const classes = useStyles()

    return (  
        <>
        <SimpleContext.Provider
        value={{
            persons: getPersons,
            handleNameChange: handleNameChange,
            handleDeletePerson: handleDeletePerson,
            handleNewPerson: handleNewPerson,
            handleShowPerson: handleShowPerson,
            setPerson: setPerson,
        }}>
         <div className={classes.all}>
        <Header 
         //personsLenght={persons.length} appTitle={this.state.appTitle}  
         />
         <NewPerson />
         <ShowPerson/>
         <ToastContainer />
        {person}
        </div>
        </SimpleContext.Provider>
        </>


    )}

 
export default App;