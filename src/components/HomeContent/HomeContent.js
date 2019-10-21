import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Fab from '@material-ui/core/Fab';


import GitHubCircleIcon from 'mdi-material-ui/GithubCircle';

import EmptyState from '../EmptyState';
import {BrowserRouter as Router, Route, withRouter,Link} from 'react-router-dom';

import Dashboard from '../../components/Class/Main'
import Projects from '../Class/Pages/Projects'
import Inventory from '../Class/Pages/Inventory'

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import TocIcon from '@material-ui/icons/Toc';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import DashboardIcon from '@material-ui/icons/Dashboard';


const styles = (theme) => ({
  emptyStateIcon: {
    fontSize: theme.spacing(12)
  },

  button: {
    marginTop: theme.spacing(1)
  },

  buttonIcon: {
    marginRight: theme.spacing(1)
  },
  root: {
    width: "100%",
    padding: "10px",
    position: 'fixed',
    bottom:0,
    alignItem: "stretch"
  },
});

class HomeContent extends Component {
  state = {
    value: 0,
    pathMap: [
      '/dashboard',
      '/projects',
      '/inventory'
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
    // Styling
    const { classes } = this.props;
    const {value, pathMap} = this.state;
    // Properties
    const { signedIn } = this.props;

    if (signedIn) {
      return (
        <Router>
           <React.Fragment>
           <Route path="/dashboard" component={Dashboard} />   
           <Route path="/projects" component={Projects} /> 
           <Route path="/inventory" component={Inventory} /> 
           <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Dashboard" icon={<DashboardIcon />} component={Link} to={pathMap[0]} />
        <BottomNavigationAction label="Projects" icon={<TrackChangesIcon />} component={Link} to={pathMap[1]} />
        <BottomNavigationAction label="Inventory" icon={<TocIcon />} component={Link} to={pathMap[2]} />
        </BottomNavigation>
        </React.Fragment>
          </Router>
          
       
       
      );
    }

    return (
      <EmptyState
        title={process.env.REACT_APP_NAME}
        description="The three musketeers, all in one pack in the form of a boilerplate app"
        button={
          <Fab className={classes.button} color="secondary" href="https://github.com/Phoqe/react-material-ui-firebase" rel="noopener noreferrer" target="_blank" variant="extended">
            <GitHubCircleIcon className={classes.buttonIcon} />
            GitHub
          </Fab>
        }
      />
    );
  }
}

HomeContent.defaultProps = {
  signedIn: false
};

HomeContent.propTypes = {
  // Styling
  classes: PropTypes.object.isRequired,

  // Properties
  signedIn: PropTypes.bool.isRequired
};


export default withRouter((withStyles(styles)(HomeContent)));

