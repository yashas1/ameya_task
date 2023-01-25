import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ImageIcon from "@mui/icons-material/Image";
import Typography from "@mui/material/Typography";
const ImagesUploader = ({ text }) => {
  return (
    <Card className="card" style={{ height: "175px" }}>
      <CardContent>
        <ImageIcon />
        <Typography
          edge="start"
          variant="h1"
          component="div"
          sx={{
            fontSize: 18,
            fontWeight: "bold",
            color: "#8F5FCA",
          }}
        >
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default ImagesUploader;
