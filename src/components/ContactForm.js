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
import InputForm from "./InputForm";
const ContactForm = () => {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <ComponentHeader value={"Contact Person"} />
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1 },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <InputForm label="FirstName" id="FirstName" />
              <InputForm id="LastName" label="Last Name" />
              <InputForm id="Email" label="Email" />
            </div>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <Box
                sx={{
                  mt: 1,
                  p: 1,
                  borderRadius: 1,
                }}
              >
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">+1</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={"+1"}
                    label="+1"
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <MenuItem value={10}>+1</MenuItem>
                    <MenuItem value={20}>+2</MenuItem>
                    <MenuItem value={30}>+3</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={10}>
              <Box sx={{ mt: 1, p: 1, ml: 2 }}>
                <InputForm id="Phone" label="Phone Number" />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <TextField
            fullWidth
            id="Title"
            label="Title"
            multiline
            sx={{ mt: 10, ml: 2 }}
            color="success"
          />
          <Card
            sx={{
              minWidth: 275,
              mt: 2,
              ml: 2,
              height: 200,
              bgcolor: "#EEEDF6",
            }}
          >
            <CardContent>
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
                Upload Contact's Profile Photo
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactForm;
