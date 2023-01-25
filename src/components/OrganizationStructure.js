import React from "react";
import { Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
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
  tabelBorder: {
    border: "2px solid #1F1769 ",
  },
  table: {
    "& .MuiTableCell-root": {
      borderLeft: "2px solid #1F1769",
      borderRight: "2px solid #1F1769",
      borderBottom: "none",
    },
  },

  button: {
    color: "#8F5FCA",
    border: "solid 2px #1F1769",
    "&:hover": {
      background: "#1F1769",
      color: "#8F5FCA",
    },
    display: "flex",
    alignItems: "center",
  },
  icon: {
    fill: "black",
    borderLeft: "solid 2px black",
    paddingleft: "8px",
    marginleft: "8px",
  },
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
    <>
      <ComponentHeader value={"Organization Structure"} />
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead sx={{ border: 2, borderColor: "#1F1769" }}>
            <TableRow>
              <TableCell>
                <ComponentHeader value={"Groups"} />
              </TableCell>

              <TableCell>
                <ComponentHeader value={"Subgroups"} />
              </TableCell>
              <TableCell>
                <ComponentHeader value={"Clinics / Cohorts"} />
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
              <TableCell className={classes.tabelBorder}>
                <Button
                  className={classes.button}
                  endIcon={<Add className={classes.icon} />}
                >
                  Add New
                </Button>
              </TableCell>

              <TableCell className={classes.tabelBorder}>
                <Button
                  className={classes.button}
                  endIcon={<Add className={classes.icon} />}
                >
                  Add New
                </Button>
              </TableCell>
              <TableCell className={classes.tabelBorder}></TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </>
  );
};
export default OrganizationStructure;
