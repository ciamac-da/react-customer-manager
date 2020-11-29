import React from 'react';
import Button from '@material-ui/core/Button';
import useStyles from "./PersonStyle";

//import useStyles from '../../AppStyle';
const Person =({fullname, personDelete, personChange})=>{
    const classes = useStyles();
return(
    <div className={classes.persons}>
        <p>{`${fullname}`}</p>
        <input type="text" placeholder={fullname} onChange={personChange}/>
        <Button onClick={personDelete}>Delete</Button>
    </div>
);
}
 
export default Person;
