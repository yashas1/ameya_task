import React from "react";
import { Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ComponentHeader from "./ComponentHeader";
import { makeStyles } from "@material-ui/core/styles";

import { Button, Icon } from "@material-ui/core";
import { Add } from "@material-ui/icons";
function createData(Groups, Subgroups, Clinics) {
  return { Groups, Subgroups, Clinics };
}

const useStyles = makeStyles({
  TableContainerStyle: {
    border: "2px solid #1F1769 ",
    borderRadius: "6px"
  },
  table: {
    "& .MuiTableCell-root": {
      borderLeft: "2px solid #1F1769",
      borderBottom: "none",
    },
  },

  button: {
    color: "#8F5FCA",
    border: "solid 2px #1F1769",
    "&:hover": {
      background: "#1F1769",
      color: "#8F5FCA",
    }
  },
  icon: {
    fill: "black",
    borderLeft: "solid 2px black",
    paddingleft: "8px",
    marginleft: "8px",
  }
});
const typeData = (data) => {
  return (
    <Typography
      edge="start"
      component="div"
      sx={{
        fontSize: 18,
        color: "#1F1769",
        display: "flex",
        fontWeight: "bold",
      }}
    >
      {data}
    </Typography>
  );
};
const rows = [
  createData("Critical Care Unit", "Cancer Unit", ""),
  createData("Gastroenterology", "Lung Cancer", ""),
  createData("Pediatrics", "", ""),
  createData("Hematology", "", ""),
  createData("Emergency Care", "", ""),
];
const OrganizationStructure = () => {
  const classes = useStyles();
  return (
    <div className="tableSection">
      <ComponentHeader value={"Organization Structure"} />
      <TableContainer className={classes.TableContainerStyle} component={Paper}>
        <Table className={classes.table}>
          <TableHead sx={{ borderBottom: "2px solid #1F1769", background: "#eeedf6", borderRadius: 0 }}>
            <TableRow>
              <TableCell>
                <p className="tabelHeading">Groups</p>
              </TableCell>
              <TableCell>
                <p className="tabelHeading">Subgroups</p>
              </TableCell>
              <TableCell>
                <p className="tabelHeading">Clinics / Cohorts</p>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.Groups}>
                <TableCell component="th" scope="row">
                  {typeData(row.Groups)}
                </TableCell>
                <TableCell>{typeData(row.Subgroups)}</TableCell>
                <TableCell>{typeData(row.Clinics)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ borderTop: "4px solid #1F1769" }}>
                <Button
                  className={classes.button}
                  endIcon={<Add className={classes.icon} />}
                >
                  Add New
                </Button>
              </TableCell>

              <TableCell align="center" sx={{ borderTop: "4px solid #1F1769" }}>
                <Button
                  className={classes.button}
                  endIcon={<Add className={classes.icon} />}
                >
                  Add New
                </Button>
              </TableCell>
              <TableCell sx={{ borderTop: "4px solid #1F1769" }}></TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </div>
  );
};
export default OrganizationStructure;
