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
      color: "orange",
      fontWeight: "bolder",
      fontSize:"2rem"
    }
  }));

  export default useStyles;