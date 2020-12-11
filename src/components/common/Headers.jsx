import React from 'react';
import useStyles from './HeadersStyle';
import {FcCustomerSupport} from "react-icons/fc";
import { Typography } from '@material-ui/core';
import SimpleContext from '../../context/SimpleContext';
//Here's header component!
// Properties that I get are the lenght of persons and the title of page!
const Header = ({personsLenght}) => {
    const classes = useStyles()
    return (
        <>
        <SimpleContext.Consumer>
        {context =>(
          <>
             <Typography 
             className={classes.h2}
             component="h2"
             >

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
             {context.state.persons.length}
             </span> 
             </Typography>
          </>
        )}
        </SimpleContext.Consumer>
        </>
      );
}
 
export default Header;