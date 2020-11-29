import React from 'react';
import Button from '@material-ui/core/Button';

const Person =({fullname, personDelete, personChange})=>{
return(
    <div>
        <p>{`${fullname}`}</p>
        <input type="text" placeholder={fullname} onChange={personChange}/>
        <Button onClick={personDelete}>Delete</Button>
    </div>
);
}
 
export default Person;
