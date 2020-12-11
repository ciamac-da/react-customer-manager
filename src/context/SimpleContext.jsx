import {createContext} from 'react';

const SimpleContext = createContext({
    persons: [],
    handleShowPerson : () => {},
    handleSavePerson : () =>{},
    handleNameChange : ()=> {},
    handleDeletePerson : ()=> {},
    handleNewPerson : ()=> {},
    setPerson : ()=> {},
})
export default SimpleContext;