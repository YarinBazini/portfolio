import React from "react";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import IconButton from "@mui/material/IconButton";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { scroller } from "react-scroll";
import "./Home.css";

const Home = () => {
  const scrollToSection = (classToScroll) => {
    scroller.scrollTo(classToScroll, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className="welcome-div">
      <div>
        <Fade top>
          <p className="home-content">Hi, I'm</p>
        </Fade>
      </div>
      <Fade top>
        <h1 className="name">Yarin Bazini.</h1>
      </Fade>
      <Zoom top cascade>
        <p className="home-content">Welcome to my portfolio!</p>
      </Zoom>

      <div className="scroll-down-icon">
        <IconButton color="inherit" onClick={() => scrollToSection("about")}>
          <ArrowDownwardIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Home;
