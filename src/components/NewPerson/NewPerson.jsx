import React from 'react';
import SimpleContext from '../../context/SimpleContext';
import useStyles from './NewPersonStyle';
import AddIcon from '@material-ui/icons/Add';
import { Input, Fab }from '@material-ui/core';




const NewPerson = () =>{
    const classes = useStyles();
return(
    <>
    <SimpleContext.Consumer>
    {contex =>(
        <>
    <div className={classes.fabIn}>
     <Fab 
     className={classes.fab}
     aria-label="add"
     onClick={contex.handleNewPerson}
     >
    <AddIcon />
    </Fab>
    <Input 
    type="text" 
    placeholder="Add New Customer" 
    onChange= {contex.setPerson}
    value= {contex.state.person}
    className={classes.input}
    />
    </div>
    
    </>
)}
    </SimpleContext.Consumer>
</>
)}

export default NewPerson;