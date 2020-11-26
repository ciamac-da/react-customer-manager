import React from 'react';

const Person =({fullname, personDelete})=>{
return(
    <div onClick={personDelete}>
        <p>{`${fullname}`}</p>
    </div>
);
}
 
export default Person;
