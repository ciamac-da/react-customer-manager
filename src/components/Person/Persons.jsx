import React from 'react';
import Person from './Person';
const Persons = ({ persons, personSave, personDelete, personChange }) => {
    return (
      <>
        {persons.map(person => (
            <Person 
            key={person.id}
            fullname={person.fullname}
            personSave={()=> personSave(person.id)}
            personDelete={()=> personDelete(person.id)}
            personChange={event=> personChange(event, person.id)}
            />
        ))}
    </> 
    );
};
 
export default Persons ;