import React, { Component, forwardRef } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import MaterialTable from "material-table";
import AddBox from "@material-ui/icons/AddBox";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

const styles = theme => ({
  fab: {
    margin: theme.spacing(1),
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    marginBottom: "50px"
  }
});

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: "Item ID", field: "itemId" },
        { title: "Item", field: "name" },
        { title: "Total Avalible", field: "totalAvli",type: "numeric" },
        { title: "Total", field: "total", type: "numeric" },
        { title: "Ordered Date", field: "orderDate", type: "date" },
 
      ],
      data: [
        {
          itemId: "4352",
          name: "Hammers",
          totalAvli: 5,
          total: 7,
          orderDate: "05/23/20"
        },
        {
            itemId: "4354",
            name: "Screw Drivers",
            totalAvli: 2,
            total: 5,
            orderDate: "03/23/20"
          },
          {
            itemId: "4355",
            name: "Drill",
            totalAvli: 9,
            total: 9,
            orderDate: "05/23/20"
          },
      ]
    };
  }
  rowWasCliked = (rowData,event) => {
    console.log("rowData"  + rowData.name)
    console.log("event"  + event)
    console.log("yooo");
  };

  render() {
    const { setState, state } = this.state;

    let intro = (
      <div>
        <h2> Welcome to the Inventory page</h2>
      </div>
    );

    let dashboard = (
      <div style={{ maxWidth: "98%" }}>
        <MaterialTable
          title=""
          columns={this.state.columns}
          data={this.state.data}
          options={{
            exportButton: true
          }}
          onRowClick={(event, rowData) => this.rowWasCliked(rowData,event)}
          icons={tableIcons}
          editable={{
            onRowAdd: newData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  const data = [this.state.data];
                  data.push(newData);
                  setState( this.state.data );
                }, 600);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  const data = [this.state.data];
                  data[data.indexOf(oldData)] = newData;
                  setState(this.state.data);
                }, 600);
              }),
            onRowDelete: oldData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  const data = [...state.data];
                  data.splice(data.indexOf(oldData), 1);
                  setState({ ...state, data });
                }, 600);
              })
          }}
        />
      </div>
    );

    return (
      <React.Fragment>
        <div align="center">{intro}</div>
        <div align="center">{dashboard}</div>
      </React.Fragment>
    );
  }
}

Inventory.defaultProps = {
  signedIn: false
};

Inventory.propTypes = {
  // Styling
  classes: PropTypes.object.isRequired,

  // Properties
  signedIn: PropTypes.bool.isRequired
};

export default withStyles(styles)(Inventory);
