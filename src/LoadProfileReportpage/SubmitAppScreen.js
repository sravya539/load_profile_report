import React, { useState } from "react";
import "./Styles.css";
import MaterialTable from "material-table";
import DeleteIcon from "@material-ui/icons/Delete";
import SearchIcon from "@material-ui/icons/Search";
import SaveIcon from "@material-ui/icons/Save";
import { Button } from "@material-ui/core";
import TSSPDCL from "../assets/TSSPDCL.jpg"
import { Grid, Typography } from "@mui/material";


export default function MaterialChart() {
  const [dataStore, setDataStore] = useState([
    { name: "Jon", job: "Software Dev", age: 29 }
  ]);

  return (
    <div className="MaterialChart">
      <br />
      <Grid container direction="row" justifyContent="center" alignContent="center" >
        <Grid item xs={2}>
          <img src={TSSPDCL} width="100px" />
        </Grid>
        <h2>TELANGANA STATE SOUTHERN POWER DISTRIBUTION COMPANY LIMITED</h2>
      </Grid>
      <a
        target="_blank"
        href="https://smartdevpreneur.com/intro-to-material-table-for-react/"
      >
        Click here for an intro to material-table
      </a>
      <br />
      <br />
      <Grid container direction="row">
        <Grid item xs={3}>
          <Typography>
            SubStation:
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>
            Feeder:
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>
            DTR:
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>
            Meter:
          </Typography>
        </Grid>
      </Grid>
      <div style={{ maxWidth: "100%", paddingTop: "12px" }}>
        <MaterialTable
          columns={[
            {
              title: "S.No",
              field: "S.No",
              headerStyle: {
                backgroundColor: "blue"
              }
            },
            {
              title: "Date",
              field: "Date",
              headerStyle: {
                backgroundColor: "blue"
              }
            },
            {
              title: "Current(Amp)",
              field: "Current(Amp)",
              type: "numeric",
              headerStyle: {
                backgroundColor: "blue"
              }
            },
            {
              title: "Voltage(V)",
              field: "Voltage(V)",
              type: "numeric",
              headerStyle: {
                backgroundColor: "blue"
              }
            },
            {
              title: "Block Energy",
              field: "Block Energy",
              type: "numeric",
              headerStyle: {
                backgroundColor: "blue"
              }
            },
            {
              title: "Block Energy (KVARH)",
              field: "Block Energy (KVARH)",
              type: "numeric",
              headerStyle: {
                backgroundColor: "blue"
              }
            },
            {
              title: "Cumulative Energy",
              field: "Cumulative Energy",
              type: "numeric",
              headerStyle: {
                backgroundColor: "blue"
              }
            },
            {
              title: "Cumulative Energy (KVARH)",
              field: "Cumulative Energy (KVARH)",
              type: "numeric",
              headerStyle: {
                backgroundColor: "blue"
              }
            },
            {
              title: "Reactive Energy",
              field: "Reactive Energy",
              type: "numeric",
              headerStyle: {
                backgroundColor: "blue"
              }
            }
          ]}
         
          data={dataStore}
          title="TSSPDCL Data"
          icons={{
            Clear: (props) => <DeleteIcon />,
            Search: (props) => <SearchIcon />,
            ResetSearch: (props) => <DeleteIcon />
          }}

          components={{
            Action: (props) => (
              <Button
                onClick={(event) => props.action.onClick(event, props.data)}
                color="primary"
                variant="text"
                style={{ textTransform: "none" }}
                size="small"
              >
                Save
              </Button>
            )
          }}
          options={{
            headerStyle: {
              backgroundColor: "#01579b",
              color: "#FFF"
            }
          }}
        />
      </div>
    </div>
  );
}
