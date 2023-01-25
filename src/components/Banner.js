import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const Banner = () => {
  return (
    <div className="customBox">
      <Box>
        <Typography edge="start" variant="h6" align="center">
          Create/Edit an Organization
        </Typography>
      </Box>
    </div>
  );
};

export default Banner;
