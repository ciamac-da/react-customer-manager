import React from 'react';
import Button from '@material-ui/core/Button';
import useStyles from "./PersonStyle";
import { Typography, Input } from '@material-ui/core';
import Page from "react-page-loading";
import {RiDeleteBin2Fill} from "react-icons/ri";
import {AiTwotoneSave} from "react-icons/ai";
//import useStyles from '../../AppStyle';
const Person =({fullname,personSave, personDelete, personChange})=>{
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
        <div className={classes.buttons}>
        <Button 
        variant="contained" 
        onClick={personSave}
        className={classes.buttonSave}
        >
        <AiTwotoneSave />
        &nbsp;
        Save...
        </Button>
        <Button 
        onClick={personDelete}
        variant="contained" 
        className={classes.buttonDel}
        >
        <RiDeleteBin2Fill />
        &nbsp;
        Delete
        </Button>
        </div>
    </Page>
    </div>
);
}
 
export default Person;
