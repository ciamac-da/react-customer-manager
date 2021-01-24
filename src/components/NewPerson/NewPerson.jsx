import React, {useContext, useRef, useEffect} from 'react';
import useStyles from './NewPersonStyle';
import AddIcon from '@material-ui/icons/Add';
import { Input, Fab }from '@material-ui/core';




const NewPerson = ({ setPerson, handleNewPerson, person}) =>{
    const classes = useStyles();
    const focusInput = useRef(null)
    useEffect(()=>{
        focusInput.current.focus()
    })

return(
    <>
    <div className={classes.fabIn}>
     <Fab 
     className={classes.fab}
     aria-label="add"
     onClick={handleNewPerson}
     >
    <AddIcon />
    </Fab>
    <Input 
    ref={focusInput}
    type="text" 
    placeholder="Add New Customer" 
    onChange= {setPerson}
    value={person}
    className={classes.input}
    />
    </div>
    
    </>
)}


export default NewPerson;