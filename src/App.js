import React, { Component, createRef } from 'react';
//import Person from "./components/Person/Person.jsx";
import Persons from "./components/Person/Persons.jsx";
//import myStyles from "./AppStyle.jsx";
import Header from "./components/common/Headers.jsx";
import myStyles from "./AppStyle.jsx";
import { ToastContainer, toast } from 'react-toastify';
import SimpleContext from './context/SimpleContext';
import NewPerson from './components/NewPerson/NewPerson.jsx';
import ShowPerson from './components/ShowPerson/ShowPerson';

export default myStyles(class App extends Component {
    //Well I dont need c onstructor and super here and then this.state
    // The new feauture of ES7 👽
   
    state = { 
        persons:[],
        person:"",
        // The list of customers should be hidden at fisrt, therefore I Should set it to false!
        showPersons: false,
        appTitle: "Customer Manager"
    }
    // Switch show person off/on
    handleShowPerson = () =>{
        this.setState({showPersons: !this.state.showPersons})
    }
   // To save person!
    handleSavePerson = () =>{
        this.setState({showPersons: !this.state.showPersons})
    }
    

    // To delete every single user!
    handleDeletePerson = id =>{
        // to get a copy of customers list
        const persons = [...this.state.persons]
        const filteredPersons = persons.filter(p => p.id !== id)
        this.setState({persons: filteredPersons})
        
        // t acceess to person and passing it inside of toastify message
        const personIndex = persons.findIndex(p => p.id === id);
        const person = persons[personIndex]
        toast.error(`${person.fullname} was deleted successfully!`,{
        position:"bottom-right"
        })
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
      if(person.fullname !== "" && person.fullname !== " "){
          this.setState({persons, person:""})
          persons.push(person)
          
          //toastify new person
          toast.success(`${person.fullname} was added successfully`,{
            position: "bottom-right",  
            closeButton: true,
          });
      }
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
            person =  <Persons 
            //persons={persons} 
            //personDelete={this.handleDeletePerson}
            //personChange = {this.handleNameChange}
            //personSave = {this.handleSavePerson}
            />
        }

        return (
            <>
            <SimpleContext.Provider
            value={{
                state: this.state,
                handleNameChange: this.handleNameChange,
                handleDeletePerson: this.handleDeletePerson,
                handleNewPerson: this.handleNewPerson,
                handleShowPerson: this.handleShowPerson,
                setPerson: this.setPerson,
            }}>
             <div className={classes.all}>
            <Header 
             //personsLenght={persons.length} appTitle={this.state.appTitle}  
             />
             <NewPerson />
             <ShowPerson/>
             <ToastContainer />
            {person}
            </div>
            </SimpleContext.Provider>
            </>
         );
    }
}
)