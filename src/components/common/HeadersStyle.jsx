import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
   }));

  export default useStyles;