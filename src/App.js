import React, { Component } from 'react';
//import Person from "./components/Person/Person.jsx";
import Persons from "./components/Person/Persons.jsx";
import myStyles from "./AppStyle";
import Button from '@material-ui/core/Button';


export default myStyles(class App extends Component {
    state = { 
        persons:[
            { firstname: "Ciamac" , lastname:"Da"},
            { firstname: "Alexandru" , lastname:"Gh"},
            { firstname: "Parsa" , lastname:"Mo"}
        ],
        showPersons: false
    }

    handleShowPerson = () =>{
        this.setState({showPersons: !this.state.showPersons})
    }
    render() {
        const classes = this.props;
        const {persons, showPersons} = this.state

        let person = null;
        if(showPersons){
            person =  <Persons persons={persons} />
        }

        return (
             <div>
             <h2>Customer Manager</h2>
             <h3>Number of customers ➡️ {persons.length} !</h3>
             {person}
             <Button 
             onClick={this.handleShowPerson}
             className={classes.root}
             variant="contained"
             color="secondary"
             > 
             Show Persons 
             </Button>
        </div> );
    }
}
)