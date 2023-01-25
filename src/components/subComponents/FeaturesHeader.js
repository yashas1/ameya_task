import * as React from "react";

import { Box, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { Checkbox } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  textField: {
    m: 2,
    fontSize: "18!important",
    fontWeight: "bold!important",
    color: "#1F1769",
    display: "flex",
  },
}));

const FeaturesHeaer = ({ iconClasses, title }) => {
  const classes = useStyles();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          p: 1,
        }}
      >
        <Checkbox defaultChecked style={{ color: "green" }} />
        <Box sx={{ m: 2 }}>
          <i class={iconClasses}></i>
        </Box>

        <Typography
          edge="start"
          className={classes.textField}
          variant="h6"
          component="div"
        >
          {title}
        </Typography>
      </Box>
    </>
  );
};

export default FeaturesHeaer;
