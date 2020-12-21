import React , {useRef, useEffect,} from 'react';
import SimpleContext from '../../context/SimpleContext';
import useStyles from './NewPersonStyle';
import AddIcon from '@material-ui/icons/Add';
import { Input, Fab }from '@material-ui/core';




const NewPerson = () =>{
    console.log("New Person.jsx render()")
    const classes = useStyles();
    const inputFocus = useRef(null)
    useEffect(()=>{
        inputFocus.current.focus()
    })
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
    ref={inputFocus}
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