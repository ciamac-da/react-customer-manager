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
    alignItems: "center" 
    },
    h2: {
      display:"flex",
      justifyContent:"center",
      alignItems: "center",
      flexDirection: "column",
      color: "white",
      fontWeight: "bolder",
      fontSize:"2.5rem"
    },
    h3: {
      color: "white",
      fontWeight: "bolder",
      fontSize:"1.5rem"
    },
    fab: {
      color: "white",
      backgroundColor: "orange"
    },
    fabIn:{
      display: "flex",
      justifyContent:"center",
      margin: "1rem" 
    }
  }));

  export default useStyles;