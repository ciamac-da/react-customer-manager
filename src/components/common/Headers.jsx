import React from 'react';
import useStyles from './HeadersStyle';
import {FcCustomerSupport} from "react-icons/fc";
import { Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
//Here's header component!
// Properties that I get are the lenght of persons and the title of page!
const Header = ({appTitle}) => {
   const persons = useSelector(state=> state.persons)
  

    const classes = useStyles()
    return (
          <>
             <Typography 
             className={classes.h2}
             component="h2"
             >
                <h2>{appTitle}</h2>
             <FcCustomerSupport />
             </Typography>
             <Typography 
             className={classes.h3}
             component="h3"
             >
             Number of customers  
             &nbsp; 
             <span 
             className={classes.span}
             >
             {persons.length}
             </span> 
             </Typography>
          </>
        )}
 
export default Header;