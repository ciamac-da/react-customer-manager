import React, {useContext, useRef, useEffect} from 'react';
import SimpleContext from '../../context/SimpleContext';
import useStyles from './NewPersonStyle';
import AddIcon from '@material-ui/icons/Add';
import { Input, Fab }from '@material-ui/core';




const NewPerson = () =>{
    const context = useContext(SimpleContext)
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
     onClick={context.handleNewPerson}
     >
    <AddIcon />
    </Fab>
    <Input 
    ref={focusInput}
    type="text" 
    placeholder="Add New Customer" 
    onChange= {context.setPerson}
    
    className={classes.input}
    />
    </div>
    
    </>
)}


export default NewPerson;