import React, {useContext} from 'react';
import Person from './Person';
import SimpleContext from '../../context/SimpleContext';


const Persons = () => {

    const context = useContext(SimpleContext)
    return (
      <>
     
        {context.persons.map(person => (
            <Person 
            key={person.id}
            fullname={person.fullname}
            personSave={()=> context.handleSavePerson(person.id)}
            personDelete={()=> context.handleDeletePerson(person.id)}
            personChange={event=> context.handleNameChange(event, person.id)}
            />
        ))}
     
    </> 
    );
};
 
export default Persons ;