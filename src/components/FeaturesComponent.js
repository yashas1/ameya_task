import * as React from "react";
import dayjs from "dayjs";
import Box from "@mui/material/Box";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ComponentHeader from "./ComponentHeader";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@mui/material";
import { Checkbox, Step, StepIcon } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  box: {
    padding: theme.spacing(2),
    border: "2px solid black",
    borderRadius: "10px",
  },
  datePicker: {
    display: "inline-block",
    marginRight: theme.spacing(1),
  },
  textField: {
    m: 2,
    fontSize: "18!important",
    fontWeight: "bold!important",
    color: "#1F1769",
    display: "flex",
  },
}));

const FeaturesComponent = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(dayjs("2022-04-07"));
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <>
      <ComponentHeader value={"Feature Valid Form"} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          p: 1,
        }}
      >
        <Checkbox {...label} defaultChecked style={{ color: "green" }} />
        <Box sx={{ m: 2 }}>
          <i class="fa-2x fa-solid fa-gauge-simple-high"></i>
        </Box>

        <Typography
          edge="start"
          className={classes.textField}
          variant="h6"
          component="div"
        >
          Movement Analysis
        </Typography>
      </Box>

      <Box className={classes.box}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Custom input"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={({ inputRef, inputProps, InputProps }) => (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <input ref={inputRef} {...inputProps} />
                {InputProps?.endAdornment}
              </Box>
            )}
          />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Custom input"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={({ inputRef, inputProps, InputProps }) => (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <input ref={inputRef} {...inputProps} />
                {InputProps?.endAdornment}
              </Box>
            )}
          />
        </LocalizationProvider>
      </Box>
    </>
  );
};
export default FeaturesComponent;
