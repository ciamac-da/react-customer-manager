import React,{Component} from 'react';
import Person from './Person';
import SimpleContext from '../../context/SimpleContext';


class Persons extends Component {

    render(){
        console.log("Persons.jsx rendered()");
        return (
            <>
      <SimpleContext.Consumer>
          {context =>(
              <>
        {context.state.persons.map(person => (
            <Person 
            key={person.id}
            fullname={person.fullname}
            personSave={()=> context.handleShowPerson(person.id)}
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
}

export default Persons ;