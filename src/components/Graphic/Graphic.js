import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GraphicImage from "../../assets/Graph.png";
import VideoImage from "../../assets/video.png";

const styles = theme => ({
  graphicHolder: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
      minHeight: 400
    }
  },
  statisticHolder: {
    width: "100%",
    "& > img": {
      width: "100%",
      height: '100%'
    },
    [theme.breakpoints.up("md")]: {
      width: "50%"
    }
  },
  statisticText: {
    paddingLeft: 15,
    backgroundColor: "#f8f8f8",
    paddingBottom: 20,
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 20
    },
    [theme.breakpoints.up("md")]: {
      width: "50%"
    },
    "& > h3": {
      paddingTop: 10,
      margin: 0,
      fontSize: 30,
      fontWeight: "bold",
      textTransform: "uppercase",
      position: "relative",
      "&:after": {
        content: "''",
        width: 30,
        position: "absolute",
        top: 85,
        left: 20,
        transform: "translate(-50%, -50%)",
        height: 2,
        backgroundColor: "#aaa",
        display: "block",
        [theme.breakpoints.up("lg")]: {
          top: 150
        },
        [theme.breakpoints.up("xl")]: {
          top: 170
        }
      },
      [theme.breakpoints.up("lg")]: {
        marginTop: 10,
        paddingTop: 0,
        fontSize: 59,
        marginBottom: 10
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: 72,
      }
    },
    "& > p": {
      fontSize: 12,
      [theme.breakpoints.up("sm")]: {
        fontSize: 15
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: 20
      },
      [theme.breakpoints.up("xl")]: {
        paddingBottom: 50
    },
    }
  },
  red: {
    color: "#ed322f",
    display: "inline-block"
  },
  statisticTextTitle: {
    display: "block",
  },
  statisticVideo: {
    display: "flex",
    marginRight: 10,
    paddingTop: 20,
    margin: "0 10px 30px 0",
    borderTop: "1px solid #aaa",
    [theme.breakpoints.up("sd")]: {
        paddingTop: 20
      },
    [theme.breakpoints.up("md")]: {
      paddingTop: 30
    },
    [theme.breakpoints.up("xl")]: {
        paddingTop: 50
    },
    "& > img ": {
      width: "33.3%",
      height: 80,
      backgroundSize: 'cover',
      [theme.breakpoints.up("sm")]: {
        width: 150,
      },
      [theme.breakpoints.up("md")]: {
        height: 100,
      },
      [theme.breakpoints.up("xl")]: {
        height: 120
    },
    },
    "& > p": {
      width: "50%",
      paddingLeft: 10,
      margin: "auto",
      fontSize: 12,
      color: 'gray',
      '& > span': {
          display: 'block'
      },
      [theme.breakpoints.up("sm")]: {
        width: "80%"
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: 22,
    },
    }
  }
});

class Graphic extends Component {
  state = {};
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.graphicHolder}>
        <div className={classes.statisticHolder}>
          <img src={GraphicImage} alt="graphics" />
        </div>
        <div className={classes.statisticText}>
          <h3>
            Quisque <span className={classes.red}>&</span>{" "}
            <span className={classes.statisticTextTitle}>siter amet</span>
          </h3>
          <p>
            Vestibulum tempor interdum tincidunt. Nam feugiat, metus nec laoreet
            volutpat, mi diam consectetur nisl, a vestibulum enim ligula a enim.
            Phasellus nec convallis lorem. Vestibulum a vestibulum enim ligula a
            enim. Phasellus nec convallis lorem.{" "}
          </p>
          <div className={classes.statisticVideo}>
            <img src={VideoImage} alt="youtube video" />
            <p>
              See how lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span>Quisque sit amet sollicitudin augue.</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

Graphic.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Graphic);
