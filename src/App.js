import React, { Component } from "react";
import Header from "./components/Header/Header";
import Graphic from "./components/Graphic/Graphic";
import OurProcess from "./components/OurProcess/OurProcess";
import Services from "./components/Services&Terms/Services&Terms";
import Footer from "./components/Footer/Footer";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  app: {
    height: "100vh"
  }
};

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.app}>
        <Header />
        <Graphic />
        <OurProcess />
        <Services />
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(App);
