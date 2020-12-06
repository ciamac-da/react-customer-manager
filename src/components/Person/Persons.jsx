import React from 'react';
import Person from './Person';
import SimpleContext from '../../context/SimpleContext';


const Persons = () => {
    return (
      <>
      <SimpleContext.Consumer>
          {context =>(
              <>
        {context.state.persons.map(person => (
            <Person 
            key={person.id}
            fullname={person.fullname}
            personSave={()=> context.handleSavePerson(person.id)}
            personDelete={()=> context.handleDeletePerson(person.id)}
            personChange={event=> context.handleNameChange(event, person.id)}
            />
        ))}
              </>
          )}
      </SimpleContext.Consumer>
    </> 
    );
};
 
export default Persons ;