import React from 'react';
import Person from './Person';
const Persons = ({ persons, personDelete, personChange }) => {
    return (
      <>
        {persons.map(person => (
            <Person 
            key={person.id}
            fullname={person.fullname}
            personDelete={()=> personDelete(person.id)}
            personChange={event=> personChange(event, person.id)}
            />
        ))}
    </> 
    );
};
 
export default Persons ;