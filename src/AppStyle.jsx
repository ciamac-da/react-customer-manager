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
    
  }));

  export default useStyles;