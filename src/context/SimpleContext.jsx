import React, {createContext} from 'react';

const SimpleContext = createContext({
    state: [],
    handleDeletePerson : ()=> {},
    handleNameChange : ()=> {},
    handleNewPerson : ()=> {},
    handleShowPerson : () => {},
    setPerson : ()=> {},
})
export default SimpleContext;