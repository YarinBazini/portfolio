import React, { Fragment, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import {scroller} from 'react-scroll';
import Fade from 'react-reveal/Fade';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

import './Contact.css'

const Contact = () =>{
    const scrollToSection = (classToScroll) => {
        scroller.scrollTo(classToScroll, {
            duration:800,
            delay:0,
            smooth: "easeInOutQuart",
        })
    }
    return(
        <div className="contact">
            <h2 className="contact-title">Contact me</h2>
            <div className="social-media-links">
                <a href="https://www.facebook.com/yarin.bazini/"><FacebookIcon className="icon"/></a>
                <a href="https://www.linkedin.com/in/yarin-bazini-a44526221"><LinkedInIcon className="icon"/></a>
                <a href="malito: yarinbazi@gmail.com"><EmailIcon className="icon"/></a>
                <a href="https://github.com/YarinBazini"><GitHubIcon className="icon"/></a>
            </div>
            <div className="scroll-up-icon">
            <Fade>
            <IconButton color="inherit" onClick ={()=> scrollToSection('welcome-div')} >
                <ArrowUpwardIcon />
            </IconButton>
            </Fade>
            </div>
        </div>
    )

}

export default Contact;