import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   
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