import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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