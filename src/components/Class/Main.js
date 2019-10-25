import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
const styles = (theme) => ({
  });
  

class Dashboard extends Component {
    
  render() {
  
    let intro = (
      <div>
        <h2> Welcome to the Dashboard page</h2>
        <p> Current Project Progress</p>
        <p> Items that are checked out </p>
        <p> My ToDo's</p>     
        <p>Clock in and Out? </p>
        <p> Time Card info</p>
       </div>
    );

    return (
      <React.Fragment>
        <div align="center">{intro}</div>
   
      </React.Fragment>
    );
  }
}

Dashboard.defaultProps = {
  signedIn: false
};

Dashboard.propTypes = {
  // Styling
  classes: PropTypes.object.isRequired,

  // Properties
  signedIn: PropTypes.bool.isRequired
};

export default withStyles(styles)(Dashboard);
