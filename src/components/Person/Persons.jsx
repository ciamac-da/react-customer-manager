import React from 'react';
import Person from './Person';


const Persons = ({persons, handleSavePerson, handleDeletePerson, handleNameChange}) => {

    return (
      <>
        {persons.map(person => (
            <Person 
            key={person.id}
            fullname={person.fullname}
            personSave={()=> handleSavePerson(person.id)}
            personDelete={()=> handleDeletePerson(person.id)}
            personChange={event=> handleNameChange(event, person.id)}
            />
        ))}
     
    </> 
    );
};
 
export default Persons ;