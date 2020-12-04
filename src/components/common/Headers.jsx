import React from 'react';
import useStyles from './HeadersStyle';
import {FcCustomerSupport} from "react-icons/fc";
import { Typography } from '@material-ui/core';

const Header = ({personsLenght}) => {
    const classes = useStyles()
    return (
        <>
             <Typography 
             className={classes.h2}
             component="h2"
             >
             Customer Manager 
             <FcCustomerSupport />
             </Typography>
             <Typography 
             className={classes.h3}
             component="h3"
             >
             Number of customers  
             &nbsp; 
             <span className={classes.span}>{personsLenght}</span> 
             </Typography>
        </>
      );
}
 
export default Header;