import React from "react";
import { Grid, Typography } from "@mui/material";
import { Checkbox, Step, StepIcon } from "@material-ui/core";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  textFiledNoBold: {
    fontSize: "18!important",
    color: "#1F1769",
    display: "flex",
  },
}));

const ChecklistComponent = (props) => {
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
        <Typography
          edge="start"
          className={classes.textFiledNoBold}
          variant="h6"
          component="div"
        >
          {props.value}
        </Typography>
      </Box>
    </>
  );
};
export default ChecklistComponent;
