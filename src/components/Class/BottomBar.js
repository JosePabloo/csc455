import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TocIcon from '@material-ui/icons/Toc';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';

import Schedule from '../Class/Pages/Inventory'
const styles = theme =>({
    root: {
        width: "100%",
        padding: "10px",
        position: 'fixed',
        bottom:0,
        alignItem: "stretch"
      },

})




class PrimaryNav extends Component {
  state = {
    value: 0,
    pathMap: [
      '/projects',
      '/inventory',
      '/active'
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
    const { classes } = this.props;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Projects" icon={<TrackChangesIcon />} component={Link} to={pathMap[0]} />
        <BottomNavigationAction label="Inventory" icon={<TocIcon />} component={Link} to='/inventory' />
        <BottomNavigationAction label="Active" icon={<LocationOnIcon />} component={Link} to={pathMap[2]} />
        </BottomNavigation>
    );
  }
}

export default withRouter((withStyles(styles)(PrimaryNav)));
