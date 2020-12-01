import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    persons:{
      backgroundColor: "orange",
      color:"white",
      borderRadius: ".7rem",
      textAlign: "center",
      fontWeight: "bolder",
      fontSize: "1rem",
      width: "70%",
      display: "flex",
      flexDirection:"column",
      alignItems:"center",
      margin:"auto",
      marginTop: "1rem",
      marginBottom: "1rem",
      "&:hover":{
        boxShadow: ".1rem .1rem .3rem .2rem silver"
      }
    },
    input:{
      textAlign:"center !important",
      borderRadius:".5rem",
      backgroundColor:"white"
    },
    buttons:{
      display: "flex",
      jusifyContent: "center",
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
    }
  }));

  export default useStyles;