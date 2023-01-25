import React from "react";
import TextField from "@mui/material/TextField";
const InputForm = (props) => {
  return (
    <>
      <TextField
        fullWidth
        id={props.id}
        label={props.label}
        multiline
        color="success"
      />
    </>
  );
};
export default InputForm;
