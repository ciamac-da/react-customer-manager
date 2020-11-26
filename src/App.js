import React, { Component } from 'react';
//import Person from "./components/Person/Person.jsx";
import Persons from "./components/Person/Persons.jsx";
import myStyles from "./AppStyle";
import Button from '@material-ui/core/Button';


export default myStyles(class App extends Component {
    //Well I dont need constructor and super here and then this.state
    // The new feauture of ES7 👽
    state = { 
        persons:[
            { id:1,fullname: "Ciamac Da"},
            { id:2,fullname: "Alexandru Gh"},
            { id:3,fullname: "Jared Leto"}
        ],
        showPersons: false
    }

    handleShowPerson = () =>{
        this.setState({showPersons: !this.state.showPersons})
    }

    // Tod elete every single user!
    handleDeletePerson = id =>{
        const persons = [...this.state.persons]
        const filteredPersons = persons.filter(p => p.id !== id)
        this.setState({persons: filteredPersons})



    }

    render() {
        //To catch Material-Ui from... 
        const {classes} = this.props;
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