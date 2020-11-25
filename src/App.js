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
            
        ]
    }
    render() {
        const classes = this.props;
        const {persons} = this.state
        return (
             <div>
             <h2>Customer Manager</h2>
             <h3>Number of customers ➡️ {persons.length} !</h3>
             <Persons persons={persons} />
             <Button className={classes.root}> Show Persons </Button>
        </div> );
    }
}
)