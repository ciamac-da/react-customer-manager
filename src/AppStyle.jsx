import { withStyles } from '@material-ui/core/styles';

const useStyles = withStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    header:{
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center" ,
    margin: "auto"
    },
   
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
    showBtn: {
      backgroundColor: "orange",
      margin: "2rem",
      fontSize:"1.2rem",
      color:"white",
      fontWeight: "bolder",
      "&:hover": {
        color:"orange",
        fontWeight: "bolder",
      }
    },
    input: {
      color:"white",
      textDecoration:"none"
    },
    
  }));

  export default useStyles;