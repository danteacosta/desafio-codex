import React from 'react';
import Profile from './Profile';

const Profiles = ({names}) => {
    return (
        <>  
            {/* Simula um ID fictício onde o valor a ser mostrado é o cujo ID vale 1 */}
            {names.map((cur) => (
                cur.id === '1' ?
                <Profile 
                    names={cur}
                /> : null
            ))}
        </>
    );
}
 
export default Profiles;