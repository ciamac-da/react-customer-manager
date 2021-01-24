import React from 'react';
import useStyles from './ShowPersonStyle';
import {Button }from '@material-ui/core';

const ShowPerson = () => {

const classes = useStyles()

    return (
    <>

            <Button 
             className={classes.showBtn}
             // Using this event I switch users(hide , unhide, hide, unhide)
             onClick={handleShowPerson}
             //   className={classes.root}
             variant="contained"
             > 
             Show Customers 
             </Button>

    </>
)
}
export default ShowPerson;