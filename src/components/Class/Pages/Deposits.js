import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
//mport Title from './Title';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <h1>Employee Name</h1>
      <Typography color="textSecondary" className={classes.depositContext}>
        Clocked in at 
      </Typography>
      <Typography component="p" variant="h4">
       9:12AM
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        Working on XXXXX
      </Typography>
      <div>
        <Link color="primary" >
          Check in
        </Link>
      </div>
    </React.Fragment>
  );
}