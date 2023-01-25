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
import ComponentHeader from "./ComponentHeader";
import CardContent from "@mui/material/CardContent";
import ImagesUploader from "./ImageUploader";
const ContactForm = () => {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");

  return (
    <>
      <ComponentHeader value={"Contact Person"} />
      <Grid container spacing={2} className="custom">
        <Grid item xs={7}>
          <div>
            <TextField
              className="mb-3"
              label="First Name"
              variant="outlined"
              fullWidth
            />
            <TextField
              className="mb-3"
              label="Last Address"
              variant="outlined"
              fullWidth
            />
            <TextField
              className="mb-3"
              label="Email"
              variant="outlined"
              fullWidth
            />
          </div>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Box sx={{ mt: 1, p: 1, ml: 2 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">+1</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={state}
                    label="+1"
                    onChange={(e) => setState(e.target.value)}
                  >
                    <MenuItem value={1}>+1</MenuItem>
                    <MenuItem value={2}>+2</MenuItem>
                    <MenuItem value={3}>+3</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={9}>
              <Box sx={{ mt: 1, p: 1, ml: 2 }}>
                <TextField label="Phone number" variant="outlined" fullWidth />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <TextField label="Title" variant="outlined" fullWidth />
          <ImagesUploader text={"Upload Contact's Profile Photo"} />
        </Grid>
      </Grid>
    </>
  );
};

export default ContactForm;
