import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box } from "@mui/material";
import SimpleAlert from "./AlertBasics";

export default function BasicsDiaglog() {
  const [open, setOpen] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickAgreeDialog = () => {
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);

    handleClose();
  };

  return (
    <React.Fragment>
      {/* Alert for this Dialog if click Agree */}
      {showAlert && <SimpleAlert />}
      <Box display='flex' justifyContent='center' alignItems='center'>
        <Button variant='outlined' onClick={handleClickOpen}>
          Open alert dialog
        </Button>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'>
        <DialogTitle id='alert-dialog-title'></DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            The alert of this Dialog will show here
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClickAgreeDialog} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
