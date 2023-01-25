import React from "react";
import { Typography } from "@mui/material";
const ComponentHeader = (props) => {
  const font = props.fontSize;
  console.log(font);
  return (
    <>
      <Typography
        edge="start"
        component="div"
        sx={{
          m: 4,
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
