import React, { Component } from "react";
import Logo from "../../assets/Logo.png";
import Drawer from "../Drawer/Drawer";
import { withStyles } from "@material-ui/core/styles";
import backgroundPicture from "../../assets/BG.png";
import classNames from "classnames";
import PropTypes from "prop-types";

const styles = theme => ({
  mainHeader: {
    backgroundImage: `url(${backgroundPicture})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    position: "relative"
  },
  topBar: {
    display: "flex",
    color: "white",
    padding: "20px 20px 0 10px",
    justifyContent: "space-between",
    textTransform: "uppercase",
    position: 'relative',
    [theme.breakpoints.up("md")]: {
      padding: "95px 135px 0 65px"
    }
  },
  logo: {
    margin: 0,
    width: 200,
    "& > img": {
      width: 200
    },
    [theme.breakpoints.up("md")]: {
      "& > img": {
        width: 304
      }
    }
  },
  navigation: {
    listStyle: "none",
    position: "relative",
    fontSize: 20,
    textTransform: "uppercase",
    display: 'none',
    userSelect: "none",
    [theme.breakpoints.up("md")]: {
      display: 'flex'
    }
  },
  navigationItem: {
    padding: "0 15px",
    lineHeight: "20px",
    borderLeft: "1px solid white",
    cursor: "pointer",
    transition: "all .6s",
    "&:first-child": {
      borderLeft: 0
    },
    "&:hover": {
      color: "#5C3662"
    }
  },
  smallNav: {
    position: "absolute",
    top: 30,
    right: 20,
    cursor: 'pointer',
    outline: 'none',
    '&:focus': {
      outline: 'none'
    },
    [theme.breakpoints.up("md")]: {
      display: 'none'
    }
  },
  hamIcon: {
    position: "absolute",
    right: -20,
    fontSize: 30,
    top: -5,
    userSelect: "none",
    outline: 'none',
    '&:focus': {
      outline: 'none'
    }
  },
  contentHolder: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "#ffffff"
  },
  contentTitle: {
    margin: 0,
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 16,
    userSelect: 'none', 
    [theme.breakpoints.up("sm")]: {
      fontSize: 40,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 72,
    },
    "& > span": {
      display: "block",
      color: "#ed322d"
    }
  },
  contentText: {
    fontSize: 10,
    marginTop: 35,
    color: "#a8a8a8",
    [theme.breakpoints.up("sm")]: {
      fontSize: 15,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 20,
    },
    "& > span": {
      display: "block"
    }
  }
});

class Header extends Component {
  state = {
    right: false
  };
  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.mainHeader}>
        <div className={classes.topBar}>
          <h1 className={classes.logo}>
            <img src={Logo} alt="Logo" />
          </h1>
          <ul className={classes.navigation}>
            <li className={classes.navigationItem}>Contact</li>

            <li
              className={classes.navigationItem}
              onClick={this.toggleDrawer("right", true)}
            >
              Menu
              <i className={classNames("material-icons", classes.hamIcon)}>
                {" "}
                menu{" "}
              </i>
            </li>
          </ul>
          <div className={classes.smallNav}  onClick={this.toggleDrawer("right", true)}>
            <i className="material-icons"> menu </i>
          </div>
        </div>
        <div className={classes.contentHolder}>
          <h2 className={classes.contentTitle}>
            Research & Analysis <span>driving results</span>
          </h2>
          <p className={classes.contentText}>
            Anveshan is a research and analysis consultants{" "}
            <span>that helps to make solid decisions and drive results.</span>
          </p>
        </div>
        <Drawer toggleDrawer={this.toggleDrawer} right={this.state.right} />
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
