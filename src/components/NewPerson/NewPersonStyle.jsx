import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   
    fab: {
      color: "white",
      backgroundColor: "orange",
      marginRight: "1rem",
      "&:hover": {
        color: "orange"
      }
    },
    fabIn:{
      display: "flex",
      justifyContent:"center",
      margin: "1rem" 
    },
   
    input: {
      color:"white",
      textDecoration:"none"
    },
    
  }));

  export default useStyles;