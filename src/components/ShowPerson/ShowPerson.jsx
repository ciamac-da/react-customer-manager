import React from 'react';
import SimpleContext from '../../context/SimpleContext';
import useStyles from './ShowPersonStyle';

const ShowPerson = () => {

const classes = useStyles()

    return (
    <>
<SimpleContext.Consumer>
<>

</>
</SimpleContext.Consumer>
    </>
)
}
export default ShowPerson;