import React, {useContext} from 'react';
import SimpleContext from '../../context/SimpleContext';
import useStyles from './ShowPersonStyle';
import {Button }from '@material-ui/core';

const ShowPerson = () => {

const context = useContext(SimpleContext)
const classes = useStyles()

    return (
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
)
}
export default ShowPerson;