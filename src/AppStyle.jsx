import { withStyles } from '@material-ui/core/styles';

const useStyles = withStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    all:{
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center" ,
    margin: "auto"
    },
  
    
  }));

  export default useStyles;