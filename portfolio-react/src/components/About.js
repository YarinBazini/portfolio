import React from 'react';
import Zoom from 'react-reveal/Zoom';
import useWindowSize from '../hooks/useWindowSize';

import './About.css'

const About = () =>{
    const size = useWindowSize();

    return(
        <div className="about-container">
        {size.width > 500  && 
            <Zoom>
                <div className="icon-container">
                    <img src="/About_icon_(The_Noun_Project).svg.png" alt="about" className="icon" />
                </div>
            </Zoom>
           }
            <div className="about">
            <h2 className="about-title">About</h2>
            
            <div  className="about-content">
                My name is Yarin Bazini, 23 years old from Tel-Aviv. 
                I'm a Second year student of computer science at the Tel
                Aviv-Jaffa Academic College. Former IDF officer.
                Highly motivated to learn new systems and
                technologies. Has a high self-learning ability,
                extensive experience in teamwork and team
                leadership, systemic vision and creativity.
            </div>
            {size.width < 500  && 
                <Zoom>
                    <div className="icon-container">
                        <img src="/About_icon_(The_Noun_Project).svg.png" alt="about" className="icon" />
                    </div>
                </Zoom>
               }
            
            </div>
            
        </div>
  
    )

}

export default About;