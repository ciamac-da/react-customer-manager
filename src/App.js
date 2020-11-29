import React, { Component } from 'react';
//import Person from "./components/Person/Person.jsx";
import Persons from "./components/Person/Persons.jsx";
//import myStyles from "./AppStyle.jsx";
import {Button, Input, Fab }from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import myStyles from "./AppStyle.jsx";
import {FcCustomerSupport} from "react-icons/fc";
import "./index.css";

export default myStyles(class App extends Component {
    //Well I dont need c onstructor and super here and then this.state
    // The new feauture of ES7 👽
    state = { 
        persons:[],
        // The list of customers should be hidden at fisrt, therefore I Should set it to false!
        showPersons: false
    }
    handleShowPerson = () =>{
        this.setState({showPersons: !this.state.showPersons})
    }

    handleSavePerson = () =>{
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
        // to get a copy of all persons
        const persons = [...allPersons];
        // overwrite the names
        persons[personIndex] = person;
        this.setState({persons});
    }

  handleNewPerson = () => {
      const persons = [...this.state.persons]
      const person ={
          id : Math.floor(Math.random() * 10000),
          fullname : this.state.person
      } 
      persons.push(person)
      this.setState({persons, person:""})
  };

  setPerson = event => {
      this.setState({ person: event.target.value})
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
            personChange = {this.handleNameChange}
            personSave = {this.handleSavePerson}
            />
        }

        return (
             <div className={classes.header}>
             <h2 className={classes.h2}>Customer Manager <FcCustomerSupport /></h2>
             <h3 className={classes.h3}>Number of customers  &nbsp; {persons.length} </h3>
             <div className={classes.fabIn}>
             <Fab 
             className={classes.fab}
             aria-label="add"
             onClick={this.handleNewPerson}
             >
              <AddIcon />
            </Fab>
                 <Input 
                 type="text" 
                 placeholder="Add New Customer" 
                 onChange= {this.setPerson}
                 value= {this.state.person}
                 className={classes.mui}
                 />
             </div>
             <Button 
             className={classes.showBtn}
             // Using this event I switch users(hide , unhide, hide, unhide)
             onClick={this.handleShowPerson}
          //   className={classes.root}
             variant="contained"
             > 
             Show Customers 
             </Button>
             
             {person}
        </div> );
    }
}
)