import React, { useRef} from 'react';
import useStyles from './NewPersonStyle';
import AddIcon from '@material-ui/icons/Add';
import { Input, Fab }from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { setPerson} from "../../actions//person";
import { addPerson } from '../../actions/persons';

const NewPerson = () =>{
    const person = useSelector(state=> state.person)
    const dispatch = useDispatch();
    const classes = useStyles();
    const focusInput = useRef(null)
  

return(
    <>
    <div className={classes.fabIn}>
     <Fab 
     className={classes.fab}
     aria-label="add"
     onClick={()=> dispatch(addPerson(person))}
     >
    <AddIcon />
    </Fab>
    <Input 
    ref={focusInput}
    type="text" 
    placeholder="Add New Customer" 
    onChange= {e=>dispatch(setPerson(e))}
    value={person}
    className={classes.input}
    />
    </div>
    
    </>
)}


export default NewPerson;