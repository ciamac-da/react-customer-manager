import { withStyles } from '@material-ui/core/styles';

const useStyles = withStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    persons:{
      backgroundColor: "red",
      color:"white",
      borderRadius: ".7rem",
      textAlign: "center",
      fontWeight: "bolder",
      fontSize: "1rem",
      "&:hover":{
        backgroundColor: "gray !important"
      }
    }
  }));

  export default useStyles;