import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';


const ExperiencesComponent =()=>{
    const [experiences, setExperience] = useState([]);
    const fetchExperiences = async() => {
        try{
            await axios
                .get("data/experience.json").then(response=>response.data.data).then(data=>setExperience(data))
            }catch(error){
                console.log(error.response)
            }
        }
    useEffect(()=>{fetchExperiences()},[])
    return(
        <div className='experience'>
            <div className="timeline_content">
            {experiences.map(experience => (
                <div className="key" key={experience.id}>
                     <div className="content_rang">
                        {experience.id}
                     </div>
                     <div className="content_title">
                        {experience.title}
                     </div>
                     <div className="content_date">
                        {experience.date} 
                     </div>
                     <div className="content_content">
                        {experience.content}
                     </div>
                </div>   
            ))}  
              </div>
        </div>
    );
};
export default ExperiencesComponent;