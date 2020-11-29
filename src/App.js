import React, { Component } from 'react';
//import Person from "./components/Person/Person.jsx";
import Persons from "./components/Person/Persons.jsx";
import myStyles from "./AppStyle";
import Button from '@material-ui/core/Button';

export default myStyles(class App extends Component {
    //Well I dont need c onstructor and super here and then this.state
    // The new feauture of ES7 👽
    state = { 
        persons:[
            { id:1,fullname: "Ciamac Da"},
            { id:2,fullname: "Alexandru Gh"},
            { id:3,fullname: "Jared Leto"}
        ],
        // The list of customers should be hidden at fisrt, therefore I Should set it to false!
        showPersons: false
    }
    handleShowPerson = () =>{
        this.setState({showPersons: !this.state.showPersons})
    }

    // To delete every single user!
    handleDeletePerson = id =>{
        // to get a copy of customers list
        const persons = [...this.state.persons]
        const filteredPersons = persons.filter(p => p.id !== id)
        this.setState({persons: filteredPersons})
    }

    handleNameChange = (event, id)=>{
        const {persons : allPersons} = this.state;
        const personIndex = allPersons.findIndex(p => p.id === id);
        const person = allPersons[personIndex]
        // to change names
        person.fullname = event.target.value;
        // overwrite the names
        allPersons[personIndex] = person;
        this.setState({persons : allPersons});
    }
    render() {
        //To catch Material-Ui from... 
        const {classes} = this.props
        const {persons, showPersons} = this.state
        // Person is empty at first1
        let person = null;
        if(showPersons){
            person =  <Persons persons={persons} 
            personDelete={this.handleDeletePerson}
            />
        }

        return (
             <div>
             <h2>Customer Manager</h2>
             <h3>Number of customers ➡️ {persons.length} !</h3>
             <Button 
             // Using this event I switch users(hide , unhide, hide, unhide)
             onClick={this.handleShowPerson}
             className={classes.root}
             variant="contained"
             color="secondary"
             > 
             Show Customers 
             </Button>
             <p 
            // style={{backgroundColor:"red"}}
             className={classes.persons}
             >
             {person}
             </p>
        </div> );
    }
}
)