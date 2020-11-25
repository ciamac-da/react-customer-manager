import React, { Component } from 'react';
//import Person from "./components/Person/Person.jsx";
import Persons from "./components/Person/Persons.jsx";

class App extends Component {
    state = { 
        persons:[
            { firstname: "Ciamac" , lastname:"Da", age:31},
            { firstname: "Alexandru" , lastname:"Gh", age:30},
            { firstname: "Parsa" , lastname:"Mo", age:29}

        ]
     }
    render() { 
        const {persons} = this.state
        return ( <div>
        <Persons
        persons={persons}
         />
        </div> );
    }
}
 
export default App;