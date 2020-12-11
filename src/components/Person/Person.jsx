import React from 'react';
import useStyles from "./PersonStyle";
import { Typography, Grid, Card, TextField,Paper, CardActionArea , CardContent, Button } from '@material-ui/core';
import Page from "react-page-loading";
import { ThemeProvider, createMuiTheme, } from '@material-ui/core/styles';
import {RiDeleteBin2Fill} from "react-icons/ri";
import {AiTwotoneSave} from "react-icons/ai";
import AccountCircle from '@material-ui/icons/AccountCircle';
import { orange } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: orange,
  },
});

const Person =({fullname,personSave, personDelete, personChange})=>{
  
  const classes = useStyles()
  
  return(

    <Page loader={"bar"} color={"white"} size={9} duration={1}>
    <Paper>

     <Card className={classes.myCard}>
        <div className={classes.input}>
        <Grid 
        container  
        alignItems="flex-end"
        className={classes.grid}
        >
          <Grid item>
            <AccountCircle />
            &nbsp;
            &nbsp;
          </Grid>
          <Grid item>
          <ThemeProvider theme={theme}>
            <TextField
             id="input-with-icon-grid" 
             label="Click here to modify" 
             placeholder={fullname} 
             onChange={personChange}
             />
             </ThemeProvider>
          </Grid>
        </Grid>
      </div>

       <CardContent>
        <Typography
         variant="body2" 
         color="textSecondary" 
         component="p"
         className={classes.names}
          >
        {`${fullname}`}
          </Typography>
       </CardContent>
      <CardActionArea>
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
       </CardActionArea>
    </Card>
    </Paper>
    </Page>
);
}
 
export default Person;
