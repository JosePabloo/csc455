import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
\import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LanguageIcon from '@material-ui/icons/Language';
import GroupIcon from '@material-ui/icons/Group';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import HelpIcon from '@material-ui/icons/Help';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TocIcon from '@material-ui/icons/Toc';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
const useStyles = makeStyles({
    root: {
      width: "100%",
      padding: "10px",
      position: 'fixed',
      bottom:0,
      alignItem: "stretch"
    },
  });

class PrimaryNav extends Component {
  state = {
    value: 0,
    pathMap: [
      '/panoramas',
      '/members',
      '/shop',
      '/about',
      '/subscribe'
    ]
  };

  componentWillReceiveProps(newProps) {
    const {pathname} = newProps.location;
    const {pathMap} = this.state;

    const value = pathMap.indexOf(pathname);

    if (value > -1) {
      this.setState({
        value
      });
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const {value, pathMap} = this.state;
    const classes = useStyles();

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Projects" icon={<TrackChangesIcon />} component={Link} to={pathMap[0]} />
        <BottomNavigationAction label="Inventory" icon={<TocIcon />} component={Link} to={pathMap[1]} />
        <BottomNavigationAction label="Active" icon={<LocationOnIcon />} component={Link} to={pathMap[2]} />
        </BottomNavigation>
    );
  }
}

export default withRouter(PrimaryNav);