import React, { Fragment, useState } from "react";
import { scroller } from "react-scroll";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Slide from "@mui/material/Slide";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Button from "@mui/material/Button";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import EmailIcon from "@mui/icons-material/Email";

import useWindowSize from "../hooks/useWindowSize";
import "./Header.css";

const HideOnScroll = (props) => {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const ElevationScroll = (props) => {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

const Header = (props) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const size = useWindowSize();
  const scrollToSection = (classToScroll) => {
    if (classToScroll === "top") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      scroller.scrollTo(classToScroll, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setMenuOpen(open);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="menu"
    >
      <List>
        <ListItem button onClick={() => scrollToSection("top")}>
          <ListItemIcon>
            <HomeIcon className="icon" />
          </ListItemIcon>
          <ListItemText primary={"Home"} />
        </ListItem>

        <ListItem button onClick={() => scrollToSection("about")}>
          <ListItemIcon>
            <InfoIcon className="icon" />
          </ListItemIcon>
          <ListItemText primary={"About"} />
        </ListItem>

        <ListItem button onClick={() => scrollToSection("skills")}>
          <ListItemIcon>
            <WorkOutlineIcon className="icon" />
          </ListItemIcon>
          <ListItemText primary={"Skills"} />
        </ListItem>

        <ListItem button onClick={() => scrollToSection("contact")}>
          <ListItemIcon>
            <EmailIcon className="icon" />
          </ListItemIcon>
          <ListItemText primary={"Contact"} />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar color={"inherit"}>
          {size.width > 500 ? (
            <div>
              <Button
                variant="text"
                color="inherit"
                className="header-button-big"
                onClick={() => scrollToSection("top")}
              >
                Home
              </Button>
              <Button
                variant="text"
                color="inherit"
                className="header-button-big"
                onClick={() => scrollToSection("about")}
              >
                About
              </Button>
              <Button
                variant="text"
                color="inherit"
                className="header-button-big"
                onClick={() => scrollToSection("skills")}
              >
                Skills
              </Button>
              <Button
                variant="text"
                color="inherit"
                className="header-button-big"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </Button>
            </div>
          ) : (
            <div onClick={() => scrollToSection("top")}>
              <MenuIcon
                onClick={toggleDrawer("left", true)}
                className="menu-icon"
              />

              <SwipeableDrawer
                anchor={"left"}
                open={isMenuOpen}
                onClose={toggleDrawer("left", false)}
                onOpen={toggleDrawer("left", true)}
              >
                {list("left")}
              </SwipeableDrawer>
            </div>
          )}
        </AppBar>
      </ElevationScroll>
    </Fragment>
  );
};

export default Header;
