import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ComponentHeader from "./ComponentHeader";
function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData("Critical Care Unit", "Cancer Unit"),
  createData("Gastroenterology", "Lung Cancer"),
  createData("Pediatrics"),
  createData("Hematology"),
  createData("Emergency Care"),
];
const OrganizationStructure = () => {
  return (
    <>
      <ComponentHeader value={"Organization Structure"} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
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
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.calories}</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default OrganizationStructure;
