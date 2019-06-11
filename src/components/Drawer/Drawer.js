import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Divider from "@material-ui/core/Divider";
import Logo from "../../assets/Logo.png";

const styles = theme => ({
  list: {
    width: 250,
    [theme.breakpoints.up("md")]: {
      width: 350
    }
  },
  fullList: {
    width: "auto"
  },
  sideMenuHolder: {
    backgroundColor: "#300B3F",
    color: "white",
    minHeight: "100vh",
    overflow: 'hidden'
  },
  menuItems: {
    textTransform: "uppercase",
    padding: 0
  },
  menuIcon: {
    marginRight: 10,
    position: 'relative',
    top: 2
  },
  menuList: {
    marginTop: 15
  },
  divider: {
    backgroundColor: "white"
  },
  logo: {
    width: "100%",
    textAlign: "center",
    marginTop: 50,
    "& > img": {
      width: 150
    }
  }
});

class TemporaryDrawer extends React.Component {
  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <MenuList className={classes.menuList}>
          <List className={classes.menuItems}>
            <MenuItem>
              <span className={classes.menuIcon}>
                <i className="material-icons">home</i>
              </span>
              Home
            </MenuItem>
          </List>
          <Divider className={classes.divider} />
          <List className={classes.menuItems}>
            <MenuItem>
              <span className={classes.menuIcon}>
                <i className="material-icons">graphic_eq</i>
              </span>
              QuiseQue & Siter Amet
            </MenuItem>
          </List>
          <Divider className={classes.divider} />
          <List className={classes.menuItems}>
            <MenuItem>
              <span className={classes.menuIcon}>
                <i className="material-icons">business</i>
              </span>
              Our Process
            </MenuItem>
          </List>
          <Divider className={classes.divider} />
          <List className={classes.menuItems}>
            <MenuItem>
              <span className={classes.menuIcon}>
                <i className="material-icons">assignment</i>
              </span>
              Services & Terms
            </MenuItem>
          </List>
          <Divider className={classes.divider} />
          <List className={classes.menuItems}>
            <MenuItem>
              <span className={classes.menuIcon}>
                <i className="material-icons">email</i>
              </span>
             Contact Us
            </MenuItem>
          </List>
          <Divider className={classes.divider} />
          <div className={classes.logo}>
            <img src={Logo} alt="logo" />
          </div>
        </MenuList>
      </div>
    );

    return (
      <div>
        <Drawer
          transitionDuration={500}
          anchor="right"
          open={this.props.right}
          onClose={this.props.toggleDrawer("right", false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.props.toggleDrawer("right", false)}
            onKeyDown={this.props.toggleDrawer("right", false)}
            className={classes.sideMenuHolder}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  right: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired
};

export default withStyles(styles)(TemporaryDrawer);
