import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import InputForm from "./InputForm";
import Button from "@mui/material/Button";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const OrganizationForm = () => {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Typography
            edge="start"
            variant="h6"
            component="div"
            sx={{
              m: 2,
              fontSize: 24,
              fontWeight: "bold",
              color: "#1F1769",
              display: "flex",
            }}
          >
            Organization Information
          </Typography>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1 },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <InputForm
                label="Organization Name"
                id="outlined-multiline-flexible"
              />

              <InputForm
                id="outlined-multiline-flexible"
                label="Organization Address"
              />
            </div>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box
                sx={{
                  mt: 1,
                  p: 1,
                  borderRadius: 1,
                }}
              >
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Country</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={country}
                    label="country"
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <MenuItem value={10}>Canada</MenuItem>
                    <MenuItem value={20}>India</MenuItem>
                    <MenuItem value={30}>US</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ mt: 1, p: 1, ml: 2 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">State</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={state}
                    label="State"
                    onChange={(e) => setState(e.target.value)}
                  >
                    <MenuItem value={10}>On</MenuItem>
                    <MenuItem value={20}>Vc</MenuItem>
                    <MenuItem value={30}>Tm</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ minWidth: 275, m: 10, height: 200 }}>
            <CardContent>
              <Typography
                edge="start"
                variant="h6"
                component="div"
                sx={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "#8F5FCA",
                }}
              >
                Upload Organization Logo
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
export default OrganizationForm;
