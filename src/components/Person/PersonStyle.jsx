import { makeStyles, ThemeProvider, createMuiTheme,  } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   myCard: {
    maxWidth: 345,
    width: 345,
    height: 240,
    backgroundColor:"orange"
  },
    input:{
      textAlign:"center !important",
      backgroundColor:"white", 
      jusifyContent:"center"
    },
    buttons:{
      display: "flex",
      jusifyContent: "center !important",
    },
    buttonSave:{
      color: "white",      
      backgroundColor:"green",
      margin: ".9rem",
      "&:hover":{
        backgroundColor:"silver"
      }
     },
    buttonDel:{
      color: "white",      
      backgroundColor:"red",
     margin: ".9rem",
     "&:hover":{
       backgroundColor:"silver"
     }
    },
    names:{
     marginTop: ".5rem",
     marginBottom: ".5rem",
     fontWeight:"bolder",
     wordBreak:"break-word",
     color:"white",
     fontSize:"1rem"
    }
  }));

  export default useStyles;