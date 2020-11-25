import React from 'react';
import Person from './Person';
const Persons = ({ persons }) => {
    return (
      <>
        {persons.map(person => (
            <Person 
            key={person.id}
            firstname={person.firstname}
            lastname={person.lastname}
            />
        ))}
    </> 
    );
};
 
export default Persons ;