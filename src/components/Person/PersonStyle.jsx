import { makeStyles, ThemeProvider, createMuiTheme,  } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   myCard: {
    maxWidth: 345,
    width: 345,
    height: 240,
    backgroundColor:"orange !important"
  },
    input:{
      textAlign:"center !important",
      backgroundColor:"white !important", 
      jusifyContent:"center",
      display: "flex",
      alignItems:"center",

    },
    buttons:{
      display: "flex",
      jusifyContent: "center",
      alignItems:"center",
      padding:"0px"
    },
    buttonSave:{
      color: "white !important",      
      backgroundColor:"green !important",
      "&:hover":{
        backgroundColor:"silver !important"
      }
     },
    buttonDel:{
      color: "white !important",      
      backgroundColor:"red !important",
     "&:hover":{
       backgroundColor:"silver !important"
     }
    },
    names:{
     marginTop: ".5rem",
     marginBottom: ".5rem",
     fontWeight:"bolder",
     wordBreak:"break-word",
     color:"white !important",
     fontSize:"1rem"
    }
  }));

  export default useStyles;