import React from 'react';
import Person from './Person';
const Persons = ({ persons }) => {
    return (
      <>
        {persons.map(person => (
            <Person 
            firstname={person.firstname}
            lastname={person.lastname}
            age={person.age}
            />
        ))}
    </> 
    );
};
 
export default Persons ;