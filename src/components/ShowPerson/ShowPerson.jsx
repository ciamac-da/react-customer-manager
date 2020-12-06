import React from 'react';
import SimpleContext from '../../context/SimpleContext';
import useStyles from './ShowPersonStyle';
import {Button }from '@material-ui/core';

const ShowPerson = () => {

const classes = useStyles()

    return (
    <>
<SimpleContext.Consumer>
{context =>(
<>
            <Button 
             className={classes.showBtn}
             // Using this event I switch users(hide , unhide, hide, unhide)
             onClick={context.handleShowPerson}
             //   className={classes.root}
             variant="contained"
             > 
             Show Customers 
             </Button>
</>
)}
</SimpleContext.Consumer>
    </>
)
}
export default ShowPerson;