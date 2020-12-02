import React from 'react';
import useStyles from "./PersonStyle";
import { Typography, Input, Card, TextField,Paper,TableRow, CardActions, CardContent, Button } from '@material-ui/core';
import Page from "react-page-loading";
import {RiDeleteBin2Fill} from "react-icons/ri";
import {AiTwotoneSave} from "react-icons/ai";
//import useStyles from '../../AppStyle'
const Person =({fullname,personSave, personDelete, personChange})=>{

  const classes = useStyles()
    return(

    <Page loader={"bar"} color={"white"} size={9} duration={1}>
     <Card className={classes.cardi}>
        <Typography
         component="p" 
         variant="body2" 
       //  className={classes.names}
          >
        {`${fullname}`}
          </Typography>
          <TextField 
          label="Change the Name" 
          variant="filled" 
          placeholder={fullname} 
         onChange={personChange}
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
    </Card>
    </Page>
);
}
 
export default Person;
