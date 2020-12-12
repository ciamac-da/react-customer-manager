import React, {useContext} from 'react';
import SimpleContext from '../../context/SimpleContext';
import useStyles from './NewPersonStyle';
import AddIcon from '@material-ui/icons/Add';
import { Input, Fab }from '@material-ui/core';




const NewPerson = () =>{
    const context = useContext(SimpleContext)
    const classes = useStyles();
return(
    <>
    <div className={classes.fabIn}>
     <Fab 
     className={classes.fab}
     aria-label="add"
     onClick={context.handleNewPerson}
     >
    <AddIcon />
    </Fab>
    <Input 
    type="text" 
    placeholder="Add New Customer" 
    onChange= {context.setPerson}
    
    className={classes.input}
    />
    </div>
    
    </>
)}


export default NewPerson;