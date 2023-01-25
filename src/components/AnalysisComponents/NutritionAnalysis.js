import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";

import { Checkbox } from "@material-ui/core";

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
const NutritionAnalysis = () => {
  const classes = useStyles();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          p: 1,
        }}
      >
        <Checkbox defaultChecked style={{ color: "green" }} />
        <Box sx={{ m: 2 }}>
          <i class="fa-2x fa-solid fa-utensils"></i>
        </Box>

        <Typography
          edge="start"
          className={classes.textField}
          variant="h6"
          component="div"
        >
          Nutrition Analysis
        </Typography>
      </Box>
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
            <Box>
              <DatePickerComponent />
            </Box>
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

            <Box>
              <DatePickerComponent />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default NutritionAnalysis;
