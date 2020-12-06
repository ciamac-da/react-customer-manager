import {createContext} from 'react';

const SimpleContext = createContext({
    state: [],
    handleShowPerson : () => {},
    handleSavePerson : () =>{},
    handleNameChange : ()=> {},
    handleDeletePerson : ()=> {},
    handleNewPerson : ()=> {},
    setPerson : ()=> {},
})
export default SimpleContext;