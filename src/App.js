import React, { Component } from 'react';
//import Person from "./components/Person/Person.jsx";
import Persons from "./components/Person/Persons.jsx";

class App extends Component {
    state = { 
        persons:[
            { firstname: "Ciamac" , lastname:"Da"},
            { firstname: "Alexandru" , lastname:"Gh"},
            { firstname: "Parsa" , lastname:"Mo"}

        ]
     }
    render() { 
        const {persons} = this.state
        return (
             <div>
             <h2>Customer Manager</h2>
             <h3>Number of customers ➡️ {persons.length} !</h3>
        <Persons persons={persons} />
        </div> );
    }
}
 
export default App;