import React, { useState } from "react";
import dayjs from "dayjs";
import Box from "@mui/material/Box";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
const DatePickerComponent = () => {
  const [value, setValue] = React.useState(dayjs("2022-04-07"));

  return (
    <>
      <LocalizationProvider disabled dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Custom input"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={({ inputRef, inputProps, InputProps }) => (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
              }}
            >
              <input ref={inputRef} {...inputProps} />
              {InputProps?.endAdornment}
            </Box>
          )}
        />
      </LocalizationProvider>
    </>
  );
};

export default DatePickerComponent;
