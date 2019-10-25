import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '17 Mar, 2019', 'Elvis Presley', 'Project Name', '4 Days'),
  createData(1, '12 Mar, 2019', 'Paul McCartney', 'Project Name', '20 Days'),
  createData(2, '12 Mar, 2019', 'Tom Scholz', 'Project Name', '1 Day'),
  createData(3, '01 Mar, 2019', 'Michael Jackson', 'Project Name', '7 Days'),
  createData(4, '23 Mar, 2019', 'Bruce Springsteen', 'Project Name', '3 Hours'),
];

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function ItemsOut() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <h1>Items Checked Out</h1>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Project</TableCell>
            <TableCell>Due Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary">
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}