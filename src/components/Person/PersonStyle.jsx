import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   myCard: {
    maxWidth: 345,
    width: 345,
    height: 240,
    backgroundColor:"orange"
  },
    input:{
      textAlign:"center !important",
      borderRadius:".5rem",
      backgroundColor:"white"
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
     fontSize:"1.5rem",
     color:"white",
     backgroundColor:"silver",
     display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
    }
  }));

  export default useStyles;