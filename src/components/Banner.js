import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const Banner = () => {
  return (
    <Box m={3} pt={3} sx={{ bgcolor: "EEEDFC" }}>
      <Typography
        edge="start"
        variant="h6"
        component="div"
        sx={{
          fontSize: 24,
          fontFamily: "Cabin,sans-serif",
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
