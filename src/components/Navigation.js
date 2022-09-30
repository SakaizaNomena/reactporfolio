import React from 'react'
import { NavLink } from 'react-router-dom';

const Navigation =()=>{
    return(
        <div className='navigation'>
            <ul>
                <NavLink to='/'>
                    <li>
                        Home
                    </li>
                </NavLink>
                <NavLink to='/skills'>
                    <li>
                        Skills
                    </li>
                </NavLink>
                <NavLink to='/experiences'>
                    <li>
                        Experiences
                    </li>
                </NavLink>
                <NavLink to='/contact'>
                    <li>
                        Contact
                    </li>
                </NavLink>
            </ul>      
        </div>
    );
};
export default Navigation;