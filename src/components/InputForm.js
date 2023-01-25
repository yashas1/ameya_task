import React from "react";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core/styles";
const InputForm = (props) => {
  return (
    <>
      <TextField fullWidth label={props.label} sx={{ bgcolor: "#EEEDF6" }} />
    </>
  );
};
export default InputForm;
