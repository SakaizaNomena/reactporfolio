import React from 'react';
import { useState } from 'react';

const HomeComponent =()=>{
    const [state] = useState({
        titleOne: "Hi, I'am Sakaiza Nomena",
        titleTwo: "I'm a web developer"
    });
    return(
        <div className='home'>
            <div className="header">
                <div className="page_title">Home</div>
            </div>
            <div className="home-intro">
                <h2>
                    <div className="titleOne">{state.titleOne}</div> 
                    <div className="titleTwo">{state.titleTwo}</div> 
                </h2> 
            </div>  
            <div className="home-skills">
                <div className="download">
                    <button className='download-btn'>Download CV</button>
                </div>
            </div>     
         
        </div>
    );
};
export default HomeComponent;