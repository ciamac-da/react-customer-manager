import React from 'react';

const Person =({firstname, lastname, age})=>{
return(
    <div>
        <p>{`${firstname} ${lastname} ${age} is years old!`}</p>
    </div>
);
}
 
export default Person;