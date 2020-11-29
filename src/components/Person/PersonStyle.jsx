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
        backgroundColor: "silver !important"
      }
    },
    input:{
      textAlign:"center !important",
      borderRadius:".5rem",
      backgroundColor:"white"
    },
    button:{
     backgroundColor:"red",
     marginTop: ".5rem",
     marginBottom: ".5rem",
     "&:hover":{
       backgroundColor:"orange"
     }
    },
    names:{
     marginTop: ".5rem",
     marginBottom: ".5rem",
     fontWeight:"bolder",
     fontSize:"1.2rem",
     color:"black"
    }
  }));

  export default useStyles;