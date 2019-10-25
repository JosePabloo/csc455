import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Deposits from '../Class/Pages/Deposits'
import Orders from '../Class/Pages/Orders'
import ItemsOut from '../Class/Pages/ItemsOut'

const styles = (theme) => ({
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
   // width: drawerWidth,
    // //transition: theme.transitions.create('width', {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.enteringScreen,
    // }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    // transition: theme.transitions.create('width', {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.leavingScreen,
    // }),
   // width: theme.spacing(7),
    // [theme.breakpoints.up('sm')]: {
    //   width: theme.spacing(9),
    // },
  },
  // appBarSpacer: theme.mixins.toolbar,
  // content: {
  //   flexGrow: 1,
  //   height: '100vh',
  //   overflow: 'auto',
  // },
  // container: {
  //   paddingTop: theme.spacing(4),
  //   paddingBottom: theme.spacing(4),
  // },
  // paper: {
  //   padding: theme.spacing(2),
  //   display: 'flex',
  //   overflow: 'auto',
  //   flexDirection: 'column',
  // },
  fixedHeight: {
    height: 240,
  },
});
  

class Dashboard extends Component {
  
  render() {
    const classes = styles();

    //const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    
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
         <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={classes.fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={classes.fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={classes.fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={classes.fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <ItemsOut />
              </Paper>
            </Grid>
          </Grid>
        </Container>
     
      </main>
   
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
