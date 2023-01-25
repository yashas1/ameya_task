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
function createData(Groups, Subgroups, Clinics) {
  return { Groups, Subgroups, Clinics };
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
        <Table
          sx={{
            minWidth: 650,
            [`& .${tableCellClasses.root}`]: {
              borderBottom: "none",
            },
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell sx={{ border: 2, borderColor: "#1F1769" }}>
                <ComponentHeader value={"Groups"} />
              </TableCell>

              <TableCell sx={{ border: 2, borderColor: "#1F1769" }}>
                <ComponentHeader value={"Subgroups"} />
              </TableCell>
              <TableCell sx={{ border: 2, borderColor: "#1F1769" }}>
                <ComponentHeader value={"Clinics / Cohorts"} />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.Groups}>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    border: 2,
                    borderBottom: "none",
                    borderColor: "#1F1769",
                  }}
                >
                  <Typography
                    edge="start"
                    component="div"
                    sx={{
                      m: 2,
                      fontSize: 18,
                      color: "#1F1769",
                      display: "flex",
                    }}
                  >
                    {row.Groups}
                  </Typography>
                </TableCell>
                <TableCell sx={{ border: 2, borderColor: "#1F1769" }}>
                  {row.Subgroups}
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableHead>
            <TableRow>
              <TableCell sx={{ border: 2, borderColor: "#1F1769" }}>
                <ComponentHeader value={"Groups"} />
              </TableCell>

              <TableCell sx={{ border: 2, borderColor: "#1F1769" }}>
                <ComponentHeader value={"Subgroups"} />
              </TableCell>
              <TableCell sx={{ border: 2, borderColor: "#1F1769" }}>
                <ComponentHeader value={"Clinics / Cohorts"} />
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </>
  );
};
export default OrganizationStructure;
