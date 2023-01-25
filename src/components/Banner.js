import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const Banner = () => {
  return (
    <Box sx={{ minWidth: 275, m: 3, ml: 3, bgcolor: "#EEEDF6" }}>
      <Typography
        edge="start"
        variant="h6"
        component="div"
        sx={{
          fontSize: 24,
          fontWeight: "bold",
          color: "#1F1769",
        }}
      >
        Create/Edit an Organization
      </Typography>
    </Box>
  );
};

export default Banner;
