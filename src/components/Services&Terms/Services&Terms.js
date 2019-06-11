import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ServiceBackgroundImage from "../../assets/service-bg.png";
import classNames from "classnames";

const styles = theme => ({
  servicesHolder: {
    backgroundImage: `url(${ServiceBackgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100%",
    padding: 20,
    [theme.breakpoints.up("sm")]: {
      padding: "40px 80px"
    },
    [theme.breakpoints.up("md")]: {
      padding: "40px 120px"
    },
    [theme.breakpoints.up("xl")]: {
      padding: "60px 340px 160px 340px"
    }
  },
  servicesTitle: {
    color: "#ffffff",
    textTransform: "uppercase",
    position: "relative",
    marginBottom: 50,
    "&:after": {
      content: "''",
      width: 25,
      position: "absolute",
      top: 40,
      left: 20,
      transform: "translate(-50%, -50%)",
      height: 2,
      backgroundColor: "#aaa",
      display: "block",
      [theme.breakpoints.up("sm")]: {
        textAlign: "center",
        top: 50,
        left: "50%",
        transform: "translate(-50%, -50%)"
      },
      [theme.breakpoints.up("lg")]: {
        top: 90
      }
    },
    [theme.breakpoints.up("sm")]: {
      textAlign: "center",
      fontSize: 30
    },
    [theme.breakpoints.up("lg")]: {
      textAlign: "center",
      fontSize: 59
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 72
    },
    "& > span": {
      color: "#ed322f"
    }
  },
  servicesText: {
    color: "#ffffff",
    fontSize: 12,
    marginTop: 10,
    [theme.breakpoints.up("sm")]: {
      fontSize: 18
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      fontSize: 24,
      marginTop: 80
    }
  },
  servicesList: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    marginTop: 30,
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      marginTop: 100,
      marginBottom: 70
    }
  },
  servicesListItem: {
    width: "100%",
    display: "flex",
    margin: "15px 0",
    [theme.breakpoints.up("sm")]: {
      margin: "25px 0"
    },
    [theme.breakpoints.up("md")]: {
      padding: "0 10px",
      width: "33.3%"
    }
  },
  servicesListItemArrow: {
    width: "20%",
    color: "#eaafd6",
    backgroundColor: "#802c64",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: 'pointer',
    [theme.breakpoints.up("md")]: {
      width: "25%"
    }
  },
  servicesListItemText: {
    width: "80%",
    fontSize: 12,
    color: "#c39fb7",
    backgroundColor: "#7a225d",
    padding: 10,
    [theme.breakpoints.up("sm")]: {
      padding: 15
    },
    [theme.breakpoints.up("md")]: {
      width: "75%"
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 15
    },
    "& > h5": {
      fontSize: 13,
      margin: "5px 0",
      color: "#eaafd6",
      [theme.breakpoints.up("xl")]: {
        fontSize: 18
      }
    }
  },
  pinkTextBackground: {
    backgroundColor: "#480048"
  },
  darkPinkTextBackground: {
    backgroundColor: "#300030"
  },
  pinkArrowBackground: {
    backgroundColor: "#500c50"
  },
  darkPinkArrowBackground: {
    backgroundColor: "#3a0c3a"
  },
  showItems: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  }
});

class Services extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.servicesHolder}>
        <h2 className={classes.servicesTitle}>
          Services <span>&</span> Terms
        </h2>
        <div className={classes.servicesText}>
          Vestibulum tempor interdum tincidunt. Nam feugiat, metus nec laoreet
          volutpat, mi diam consectetur nisl, a vestibulum enim ligula a enim.
          Phasellus nec convallis lorem. Vestibulum a vestibulum enim ligula a
          enim. Phasellus nec convallis lorem.
        </div>
        <div className={classes.servicesList}>
          <div className={classes.servicesListItem}>
            <div className={classes.servicesListItemArrow}>
              <i className="material-icons"> arrow_forward </i>
            </div>
            <div className={classes.servicesListItemText}>
              <h5>Adipisecting</h5>
              <div>
                Vestibulum tempor interdum tincidunt. Nam feugiat, metus nec
                laoreet volutpat
              </div>
            </div>
          </div>

          <div
            className={classNames(classes.servicesListItem, classes.showItems)}
          >
            <div className={classes.servicesListItemArrow}>
              <i className="material-icons"> arrow_forward </i>
            </div>
            <div className={classes.servicesListItemText}>
              <h5>Adipisecting</h5>
              <div>
                Vestibulum tempor interdum tincidunt. Nam feugiat, metus nec
                laoreet volutpat
              </div>
            </div>
          </div>

          <div
            className={classNames(classes.servicesListItem, classes.showItems)}
          >
            <div className={classes.servicesListItemArrow}>
              <i className="material-icons"> arrow_forward </i>
            </div>
            <div className={classes.servicesListItemText}>
              <h5>Adipisecting</h5>
              <div>
                Vestibulum tempor interdum tincidunt. Nam feugiat, metus nec
                laoreet volutpat
              </div>
            </div>
          </div>

          <div className={classes.servicesListItem}>
            <div
              className={classNames(
                classes.servicesListItemArrow,
                classes.pinkArrowBackground
              )}
            >
              <i className="material-icons"> arrow_forward </i>
            </div>
            <div
              className={classNames(
                classes.servicesListItemText,
                classes.pinkTextBackground
              )}
            >
              <h5>Sit amet consectetur</h5>
              <div>
                Vestibulum tempor interdum tincidunt. Nam feugiat, metus nec
                laoreet volutpat
              </div>
            </div>
          </div>

          <div
            className={classNames(classes.servicesListItem, classes.showItems)}
          >
            <div
              className={classNames(
                classes.servicesListItemArrow,
                classes.pinkArrowBackground
              )}
            >
              <i className="material-icons"> arrow_forward </i>
            </div>
            <div
              className={classNames(
                classes.servicesListItemText,
                classes.pinkTextBackground
              )}
            >
              <h5>Sit amet consectetur</h5>
              <div>
                Vestibulum tempor interdum tincidunt. Nam feugiat, metus nec
                laoreet volutpat
              </div>
            </div>
          </div>

          <div
            className={classNames(classes.servicesListItem, classes.showItems)}
          >
            <div
              className={classNames(
                classes.servicesListItemArrow,
                classes.pinkArrowBackground
              )}
            >
              <i className="material-icons"> arrow_forward </i>
            </div>
            <div
              className={classNames(
                classes.servicesListItemText,
                classes.pinkTextBackground
              )}
            >
              <h5>Sit amet consectetur</h5>
              <div>
                Vestibulum tempor interdum tincidunt. Nam feugiat, metus nec
                laoreet volutpat
              </div>
            </div>
          </div>

          <div className={classes.servicesListItem}>
            <div
              className={classNames(
                classes.servicesListItemArrow,
                classes.darkPinkArrowBackground
              )}
            >
              <i className="material-icons"> arrow_forward </i>
            </div>
            <div
              className={classNames(
                classes.servicesListItemText,
                classes.darkPinkTextBackground
              )}
            >
              <h5>Quisquesit amet</h5>
              <div>
                Vestibulum tempor interdum tincidunt. Nam feugiat, metus nec
                laoreet volutpat
              </div>
            </div>
          </div>

          <div
            className={classNames(classes.servicesListItem, classes.showItems)}
          >
            <div
              className={classNames(
                classes.servicesListItemArrow,
                classes.darkPinkArrowBackground
              )}
            >
              <i className="material-icons"> arrow_forward </i>
            </div>
            <div
              className={classNames(
                classes.servicesListItemText,
                classes.darkPinkTextBackground
              )}
            >
              <h5>Quisquesit amet</h5>
              <div>
                Vestibulum tempor interdum tincidunt. Nam feugiat, metus nec
                laoreet volutpat
              </div>
            </div>
          </div>

          <div
            className={classNames(classes.servicesListItem, classes.showItems)}
          >
            <div
              className={classNames(
                classes.servicesListItemArrow,
                classes.darkPinkArrowBackground
              )}
            >
              <i className="material-icons"> arrow_forward </i>
            </div>
            <div
              className={classNames(
                classes.servicesListItemText,
                classes.darkPinkTextBackground
              )}
            >
              <h5>Quisquesit amet</h5>
              <div>
                Vestibulum tempor interdum tincidunt. Nam feugiat, metus nec
                laoreet volutpat
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Services.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Services);
