import React, { useState, Fragment } from 'react';
//import Person from "./components/Person/Person.jsx";
import Persons from "./components/Person/Persons.jsx";
//import myStyles from "./AppStyle.jsx";
import Header from "./components/common/Headers.jsx";
import useStyles from "./AppStyle.jsx";
import { ToastContainer, toast } from 'react-toastify';
import NewPerson from './components/NewPerson/NewPerson.jsx';
import ShowPerson from './components/ShowPerson/ShowPerson';

const App = () => {
   
    let person = null;

    if (getShowPersons) {
        person = (
            <Persons
                persons={getPersons}
                nameChange={handleNameChange}
                deletePerson={handleDeletePerson}
            />
        );
      const classes = useStyles()

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
         <ShowPerson

         />
         <ToastContainer />
        {person}
        </div>
        </>


    )}}

 
export default App;