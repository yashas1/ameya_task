import React from "react";
import { Typography } from "@mui/material";
const ComponentHeader = (props) => {
  const font = props.fontSize;

  return (
    <>
      <Typography
        edge="start"
        component="div"
        sx={{
          mt: 2,
          mb: 2,
          fontSize: 24,
          fontWeight: "bold",
          color: "#1F1769",
          display: "flex",
        }}
      >
        {props.value}
      </Typography>
    </>
  );
};
export default ComponentHeader;
