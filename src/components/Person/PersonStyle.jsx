import { makeStyles, ThemeProvider, createMuiTheme,  } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   myCard: {
    maxWidth: 345,
    width: 345,
    height: 240,
    backgroundColor:"orange !important",
    marginBottom:"1rem"
  },
    input:{
      textAlign:"center !important",
      backgroundColor:"white !important", 
      justifyContent:"center !important",
      display: "flex !important",
      alignItems:"center !important",
    },
    grid:{
      display: "flex",
      justifyContent:"center",
    },
    buttons:{
      display: "flex",
      justifyContent: "center !important",
      alignItems:"center",
      padding:"0px"
    },
    buttonSave:{
      color: "white !important",      
      backgroundColor:"green !important",
      marginRight:"2rem !important",
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
     fontWeight:"bolder !important",
     wordBreak:"break-word",
     color:"white !important",
     fontSize:"1.4rem !important",
     height:"6.3rem",
     justifyContent:"center",
     textAlign:"center",
     textShadow:".2rem .2rem .3rem black"
    }
  }));

  export default useStyles;