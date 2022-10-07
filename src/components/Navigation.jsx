import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaPhone } from 'react-icons/fa';
import { FaHome, FaAccusoft, FaBriefcase,FaFacebook, FaLinkedin, FaGithub, FaSkype, FaProjectDiagram} from 'react-icons/fa';
import  profile_img  from './../assets/img/saroko2.png';


const Navigation =()=>{
    return(
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src={profile_img} alt="" /> 
                    <h3>Sakaiza Nomena</h3>
                </div>
               
            </div>
            <div className='navigation'>
                <ul>
                    <NavLink to='/'className={(nav)=>(nav.isActive ? "nav-active" : "")}>
                        <li>
                            <i><FaHome />  Home </i>          
                        </li>
                    </NavLink>
                    <NavLink to='/skills'className={(nav)=>(nav.isActive ? "nav-active" : "")}>
                        <li>
                           <i><FaAccusoft />  Skills</i>   
                        </li>
                    </NavLink>
                    <NavLink to='/experiences'className={(nav)=>(nav.isActive ? "nav-active" : "")}>
                        <li>
                            <i><FaBriefcase />  Experiences</i>  
                        </li>
                    </NavLink>
                    <NavLink to='/project'className={(nav)=>(nav.isActive ? "nav-active" : "")}>
                        <li>
                            <i><FaProjectDiagram />  Project</i>        
                        </li>
                    </NavLink>
                    <NavLink to='/contact'className={(nav)=>(nav.isActive ? "nav-active" : "")}>
                        <li>
                            <i><FaPhone />Contact</i>             
                        </li>
                    </NavLink>
                </ul>      
            </div>   
            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://google.fr"><FaFacebook /></a>    
                    </li>   
                    <li>
                        <a href="https://google.fr"><FaLinkedin /></a>    
                    </li> 
                    <li>
                        <a href="https://google.fr"><FaGithub /></a>    
                    </li> 
                    <li>
                        <a href="https://google.fr"><FaSkype /></a>    
                    </li>  
                </ul>    
            </div>      
        </div>
    );
};
export default Navigation;