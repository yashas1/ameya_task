import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";

import FeaturesHeaer from "../subComponents/FeaturesHeader";

import DatePickerComponent from "../DatePickerComponent";
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

const ActivityAnalysis = () => {
  const classes = useStyles();
  return (
    <>
      <FeaturesHeaer iconClasses={"fa-2x fa-solid fa-bolt"} title={"Activity Analysis"} />
      <div className="disableActivity">
        <Box className={classes.box}>
          <Typography
            className={classes.textFiledNoBold}
            edge="start"
            variant="h6"
            component="div"
          >
            Feature not activated
          </Typography>
          <Grid container spacing={2} className="custom">
            <Grid item xs={6}>
              <div className="datePickerStyle disabled">
                <DatePickerComponent />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="datePickerStyle disabled">
                <DatePickerComponent />
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};
export default ActivityAnalysis;
