import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  submitButton: {
    backgroundColor: "#8f5fca",
    color: "white",
    fontSize: "20px",
    padding: "20px 40px 20px 40px",
    margin: "30px",
    borderRadius: "30px",
  },
}));
function ButtonComponent() {
  const classes = useStyles();

  return (
    <Button
      className={classes.submitButton}
      variant="contained"
      size="large"
      type="submit"
    >
      Save Organization
    </Button>
  );
}
export default ButtonComponent;
