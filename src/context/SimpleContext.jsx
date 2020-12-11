import {createContext} from 'react';

const SimpleContext = createContext({
    persons: [],
    person: "",
    handleShowPerson : () => {},
    handleSavePerson : () =>{},
    handleNameChange : ()=> {},
    handleDeletePerson : ()=> {},
    handleNewPerson : ()=> {},
    setPerson : ()=> {},
})
export default SimpleContext;