import * as React from "react";

import Box from "@mui/material/Box";
import FeaturesHeaer from "../subComponents/FeaturesHeader";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@mui/material";

import DatePickerComponent from "../DatePickerComponent";
import ChecklistComponent from "../subComponents/ChecklistComponent";

const useStyles = makeStyles((theme) => ({
  box: {
    padding: theme.spacing(2),
    border: "2px solid #1F1769",
    borderRadius: "10px",
  },
  datePicker: {
    display: "inline-block",
    marginRight: theme.spacing(1),
  },
  textField: {
    m: 2,
    fontSize: "18!important",
    fontWeight: "bold!important",
    color: "#1F1769",
    display: "flex",
  },
  textFiledNoBold: {
    fontSize: "18!important",
    color: "#1F1769",
    display: "flex",
  },
}));

export default function MovementAnalysis() {
  const classes = useStyles();
  return (
    <>
      <FeaturesHeaer iconClasses={"fa-2x fa-solid fa-gauge-simple-high"} title={"Movement Analysis"} />
      <Box className={classes.box}>
        <Grid container spacing={2} className="custom">
          <Grid item xs={6}>
            <Typography
              className={classes.textFiledNoBold}
              edge="start"
              variant="h6"
              component="div"
            >
              Feature valid from:
            </Typography>
            <div className="datePickerStyle">
              <DatePickerComponent />
            </div>
            <ChecklistComponent value={"Movement 1"} />
            <ChecklistComponent value={"Movement 3"} />
            <ChecklistComponent value={"Movement 5"} />
          </Grid>
          <Grid item xs={6}>
            <Typography
              className={classes.textFiledNoBold}
              edge="start"
              variant="h6"
              component="div"
            >
              Feature valid until:
            </Typography>

            <div className="datePickerStyle">
              <DatePickerComponent />
              <ChecklistComponent value={"Movement 2"} />
              <ChecklistComponent value={"Movement 4"} />
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
