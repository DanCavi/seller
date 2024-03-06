const { Snackbar, Alert } = require("@mui/material");

const SnackBar = (props) => {
  

  return (
    <Snackbar>
      <Alert severity={props.severity}>{props.message}</Alert>  
    </Snackbar>
  );
}