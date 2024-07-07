import React from 'react';
//import Person from "./components/Person/Person.jsx";
import Persons from "./components/Person/Persons.jsx";
//import myStyles from "./AppStyle.jsx";
import Header from "./components/common/Headers.jsx";
import useStyles from "./AppStyle.jsx";
import NewPerson from './components/NewPerson/NewPerson.jsx';
import {Button }from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { setShowPersons } from './actions/showPersons';


const App = () => {
    const classes = useStyles()
    const showPersons = useSelector(state=> state.showPersons)
    const dispatch = useDispatch()
   
   
    return (  
        <>
         <div className={classes.all}>
        <Header appTitle="Customer Manager" />
         <NewPerson />
          <Button 
             className={classes.showBtn}
             onClick={()=> dispatch(setShowPersons())}
             variant="contained"
             > 
             Show Customers 
             </Button>
        {showPersons ? <Persons /> : null}
        </div>
        </>


    )}

 
export default App;