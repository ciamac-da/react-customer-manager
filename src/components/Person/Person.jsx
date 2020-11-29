import React from 'react';
import Button from '@material-ui/core/Button';
import useStyles from "./PersonStyle";
import { Typography, Input } from '@material-ui/core';
import Page from "react-page-loading";

//import useStyles from '../../AppStyle';
const Person =({fullname, personDelete, personChange})=>{
    const classes = useStyles();
return(
    <div className={classes.persons}>
    <Page loader={"bar"} color={"white"} size={9} duration={1}>
        <Typography
        className={classes.names}
        >
        {`${fullname}`}
        </Typography>
        <Input 
        className={classes.input} 
        type="text" 
        placeholder={fullname} onChange={personChange}
        disableUnderline
        />
        <Button 
        onClick={personDelete}
        variant="contained" 
        className={classes.button}
        >Delete
        </Button>
    </Page>
    </div>
);
}
 
export default Person;
