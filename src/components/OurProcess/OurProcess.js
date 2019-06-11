import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CirclesImage from "../../assets/circles.png";

const styles = theme => ({
  ourProcessHolder: {
    padding: "0 20px",
    [theme.breakpoints.up("md")]: {
      padding: "0 80px"
    },
    [theme.breakpoints.up("lg")]: {
      padding: 0,
      width: 1190,
      margin: "0 auto"
    },
    "& > h3": {
      textTransform: "uppercase",
      fontSize: 30,
      position: "relative",
      "&:after": {
        content: "''",
        width: 30,
        position: "absolute",
        top: 40,
        left: 20,
        transform: "translate(-50%, -50%)",
        height: 2,
        backgroundColor: "#aaa",
        display: "block",
        [theme.breakpoints.up("sm")]: {
          textAlign: "center",
          top: 40,
          left: "50%",
          transform: "translate(-50%, -50%)"
        }
      },
      [theme.breakpoints.up("sm")]: {
        textAlign: "center"
      },
      [theme.breakpoints.up("md")]: {
        marginTop: 30
      },
      [theme.breakpoints.up("xl")]: {
        marginTop: 50
      },
    }
  },
  processText: {
    fontSize: 15,
    color: "#5d5d5d",
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      fontSize: 24
    }
  },
  circles: {
    width: "100%",
    display: "block",
    margin: "30px 0",
    [theme.breakpoints.up("md")]: {
      margin: "70px 0"
    }
  },
  planning: {
    marginBottom: 50,
    [theme.breakpoints.up("md")]: {
      display: "flex",
      marginBottom: 150
    }
  },
  singlePlan: {
    [theme.breakpoints.up("md")]: {
      padding: "0 10px"
    },
    "& > h5": {
      textTransform: "uppercase",
      position: "relative",
      [theme.breakpoints.up("md")]: {
        fontSize: 14,
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: 15,
      },
      "&:after": {
        content: "''",
        width: 30,
        position: "absolute",
        top: 20,
        left: 0,
        height: 2,
        backgroundColor: "#aaa",
        display: "block",
        [theme.breakpoints.up("md")]: {
          top: 30
        }
      }
    },
    "& > p": {
      fontSize: 15,
      margingTop: 0
    }
  }
});

class OurProcess extends Component {
  state = {};
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.ourProcessHolder}>
        <h3>Our Process</h3>
        <div className={classes.processText}>
          Vestibulum tempor interdum tincidunt. Nam feugiat, metus nec laoreet
          volutpat, mi diam consectetur nisl, a vestibulum enim ligula a enim.
          Phasellus nec convallis lorem. Vestibulum a vestibulum enim ligula a
          enim. Phasellus nec convallis lorem.
        </div>
        <img
          className={classes.circles}
          src={CirclesImage}
          alt="process plan"
        />
        <div className={classes.planning}>
          <div className={classes.singlePlan}>
            <h5>Meeting</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sit amet sollicitudin augue. Sed dui quam, molestie at semper
              vitae, sagittis eu justo.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Quisque sit amet sollicitudin augue. Sed dui
              quam, molestie at semper vitae, sagittis eu justo.
            </p>
          </div>
          <div className={classes.singlePlan}>
            <h5>Planning & Organizing</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sit amet sollicitudin augue. Sed dui quam, molestie at semper
              vitae, sagittis eu justo.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Quisque sit amet sollicitudin augue. Sed dui
              quam, molestie at semper vitae, sagittis eu justo.
            </p>
          </div>
          <div className={classes.singlePlan}>
            <h5>Execuite</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sit amet sollicitudin augue. Sed dui quam, molestie at semper
              vitae, sagittis eu justo.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Quisque sit amet sollicitudin augue. Sed dui
              quam, molestie at semper vitae, sagittis eu justo.
            </p>
          </div>
          <div className={classes.singlePlan}>
            <h5>Deliever</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sit amet sollicitudin augue. Sed dui quam, molestie at semper
              vitae, sagittis eu justo.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Quisque sit amet sollicitudin augue. Sed dui
              quam, molestie at semper vitae, sagittis eu justo.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

OurProcess.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OurProcess);
