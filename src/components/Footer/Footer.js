import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import backgroundPicture from "../../assets/footer-bg.png";
import symbolImage from "../../assets/symbol.png";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faLinkedinIn
} from "@fortawesome/fontawesome-free-brands";

const styles = theme => ({
  mainFooter: {
    backgroundImage: `url(${backgroundPicture})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100%",
    position: "relative"
  },
  textField: {
    width: "80%",
    display: "block",
    margin: "10px auto",
    [theme.breakpoints.up("sm")]: {
      width: 350
    }
  },
  symbol: {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translate(-50%,-50%)",
    "& > img": {
      width: 150,
      height: 150,
      [theme.breakpoints.up("sm")]: {
        width: 150,
        height: 150
      },
      [theme.breakpoints.up("lg")]: {
        width: 200,
        height: 200
      }
    }
  },
  footerTitle: {
    paddingTop: 70,
    textAlign: "center",
    userSelect: 'none',
    "& > h3": {
      marginTop: 15,
      fontSize: 32,
      textTransform: "uppercase",
      [theme.breakpoints.up("sm")]: {
        fontSize: 45
      },
      [theme.breakpoints.up("md")]: {
        fontSize: 55,
        margin: "50px 0"
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: 70
      },
      "& > span": {
        color: "#ffffff"
      }
    }
  },
  footerTitleAdditional: {
    fontSize: 12,
    [theme.breakpoints.up("sm")]: {
      fontSize: 15
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 20
    },
    "& > span": {
      display: "block",
      fontWeight: 300
    }
  },
  footerForm: {
    backgroundColor: "#ffffff",
    textAlign: "center",
    position: "absolute",
    bottom: -137,
    paddingBottom: 30,
    transform: "translate(-50%,-50%)",
    left: "50%",
    width: "80%",
    [theme.breakpoints.up("sm")]: {
      bottom: -180,
      width: 500,
      transform: "translate(-50%,-50%)",
      left: "50%",
      padding: 30
    },
    [theme.breakpoints.up("md")]: {
      width: 700
    },
    [theme.breakpoints.up("xl")]: {
      width: 900,
      borderRadius: 10,
      bottom: -185
    }
  },
  formButton: {
    backgroundColor: "#EF3B37",
    textTransform: "uppercase",
    boxShadow:
      "0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)",
    padding: "6px 16px",
    borderRadius: 4,
    display: "block",
    margin: "20px auto",
    color: "#ffffff",
    cursor: "pointer",
    outline: "none",
    transition: "all 0.7s",
    [theme.breakpoints.up("sm")]: {
      width: 150,
      padding: "10px 20px",
      fontSize: 15,
      marginTop: 45
    },
    "&:disabled": {
      backgroundColor: "#aaa"
    },
    "&:hover":{
      [theme.breakpoints.up("md")]: {
        border: '1px solid #EF3B37',
        backgroundColor: 'white',
        color: '#EF3B37'
      },
    }
  },
  helperText: {
    textAlign: "center",
    color: "#EF3B37"
  },
  sentMessage: {
    textAlign: "center",
    color: "#489366",
    position: 'absolute',
    display: 'block',
    width: '100%',
  },
  bottomFooter: {
    borderTop: "1px solid rgba(218, 223, 225, 1)",
    minHeight: 150
  },
  socialNetworks: {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
    width: "100%",
    justifyContent: "center",
    marginTop: 20,
    [theme.breakpoints.up("sm")]: {
      marginTop: 70
    },
    "& > li": {
      border: "1px solid gray",
      width: 35,
      height: 35,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: 10,
      cursor: "pointer",
      transition: "all 0.7s",
      "&:hover": {
        backgroundColor: "#EF3B37",
        color: "white",
        border: "1px solid transparent"
      }
    }
  },
  copyRights: {
    fontSize: 12,
    textAlign: "center",
    margin: "25px 0"
  }
});

class Footer extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    nameIsValid: true,
    emailIsValid: true,
    messageIsValid: true,
    formIsValid: false,
    formSent: false
  };
  handleChange = name => event => {
    const value = event.target.value;
    this.setState(
      {
        [name]: value
      },
      () => {
        this.validateField(name, value);
      }
    );
  };
  validateField = (name, value) => {
    let emailValid = this.state.emailIsValid;
    switch (name) {
      case "name":
        if (value !== "") {
          this.setState({ nameIsValid: true });
        } else {
          this.setState({ nameIsValid: false });
        }
        break;
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        emailValid === null ? (emailValid = false) : (emailValid = true);
        this.setState({ emailIsValid: emailValid });
        break;
      case "message":
        if (value !== "") {
          this.setState({ messageIsValid: true });
        } else {
          this.setState({ messageIsValid: false });
        }
        break;
      default:
        break;
    }
    this.validateForm();
  };
  validateForm = () => {
    this.state.nameIsValid &&
    this.state.messageIsValid &&
    this.state.emailIsValid
      ? this.setState({ formIsValid: true })
      : this.setState({ formIsValid: false });
  };
  handleSubmit = event => {
    event.preventDefault();
    let body = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };
    if (this.state.formIsValid) {
      console.log(body);
      this.setState({ formSent: true });
    }
  };
  render() {
    const { classes } = this.props;
    const {
      nameIsValid,
      emailIsValid,
      messageIsValid,
      name,
      email,
      message,
      formSent
    } = this.state;
    return (
      <React.Fragment>
        <div className={classes.mainFooter}>
          <div className={classes.symbol}>
            <img src={symbolImage} alt="Symbol" />
          </div>
          <div className={classes.footerTitle}>
            <h3>
              Take <span>the next</span> step
            </h3>
            <div className={classes.footerTitleAdditional}>
              Do you need our help to your brand to its fullest potential?
              <span>Let us know how we can help you</span>
            </div>
          </div>
          <div className={classes.footerForm}>
            <form onSubmit={e => this.handleSubmit(e)}>
              <TextField
                id="standard-name"
                label="Name"
                className={classes.textField}
                value={name}
                onChange={this.handleChange("name")}
                margin="normal"
                required
                error={!nameIsValid}
                fullWidth={true}
              />
              {nameIsValid ? null : (
                <FormHelperText className={classes.helperText}>
                  Name is required!
                </FormHelperText>
              )}
              <TextField
                id="standard-name"
                label="Email"
                className={classes.textField}
                value={email}
                onChange={this.handleChange("email")}
                margin="normal"
                required
                error={!emailIsValid}
                fullWidth={true}
              />
              {emailIsValid ? null : (
                <FormHelperText className={classes.helperText}>
                  Please check your email!
                </FormHelperText>
              )}
              <TextField
                id="standard-name"
                label="Message"
                className={classes.textField}
                value={message}
                onChange={this.handleChange("message")}
                margin="normal"
                multiline={true}
                required
                error={!messageIsValid}
                fullWidth={true}
              />
              {messageIsValid ? null : (
                <FormHelperText className={classes.helperText}>
                  Message is required!
                </FormHelperText>
              )}
              <button className={classes.formButton}>Send</button>
              {!formSent ? null : (
                <FormHelperText className={classes.sentMessage}>
                  Your message has been sent!
                </FormHelperText>
              )}
            </form>
          </div>
        </div>
        <div className={classes.bottomFooter}>
          <ul className={classes.socialNetworks}>
            <li>
              <FontAwesomeIcon icon={faTwitter} />
            </li>
            <li>
              <FontAwesomeIcon icon={faFacebookF} />
            </li>
            <li>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </li>
          </ul>
          <div className={classes.copyRights}>© All rights reserved.</div>
        </div>
      </React.Fragment>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
