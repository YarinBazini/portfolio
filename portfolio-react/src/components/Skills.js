import React, { Fragment, useState } from 'react';
import Bounce from 'react-reveal/Bounce';

import './Skills.css'

const Skills = () =>{
    return(
        <div className="skills">
        <h2 className="skills-title">Skills</h2>
       
        <div className="skill-container"> 
            <p>C++</p>
            <Bounce left >
                <div className="skill">
                    <div className = "good-cpp"></div>
                    <div className = "bad-cpp"></div>
                </div>
            </Bounce>
        </div>

        <div className="skill-container"> 
        <p>C</p>
        <Bounce left >
            <div className="skill">
                <div className = "good-c"></div>
                <div className = "bad-c"></div>
            </div>
        </Bounce>
         </div>
  
         <div className="skill-container"> 
         <p>JS</p>
         <Bounce left >
             <div className="skill">
                 <div className = "good-js"></div>
                 <div className = "bad-js"></div>
             </div>
         </Bounce>
         </div>

         <div className="skill-container"> 
         <p>React</p>
         <Bounce left >
             <div className="skill">
                 <div className = "good-react"></div>
                 <div className = "bad-react"></div>
             </div>
         </Bounce>
         </div>

         <div className="skill-container"> 
         <p>CSS</p>
         <Bounce left >
             <div className="skill">
                 <div className = "good-css"></div>
                 <div className = "bad-css"></div>
             </div>
         </Bounce>
         </div>

         <div className="skill-container"> 
         <p>HTML</p>
         <Bounce left >
             <div className="skill">
                 <div className = "good-html"></div>
                 <div className = "bad-html"></div>
             </div>
         </Bounce>
         </div>
      
        
           
        </div>
    )

}

export default Skills;