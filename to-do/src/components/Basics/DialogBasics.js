import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import {
  AppBar,
  Box,
  IconButton,
  Slide,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import SimpleAlert from "./AlertBasics";

export default function BasicsDiaglog() {
  const [openDialog1, setOpenDialog1] = React.useState(false);
  const [openDialog2, setOpenDialog2] = React.useState(false);
  const [showAlertDialog1, setShowAlertDialog1] = React.useState(false);
  const handleClickOpenDiaglog1 = () => {
    setOpenDialog1(true);
  };

  const handleCloseDiaglog1 = () => {
    setOpenDialog1(false);
  };

  const handleClickAgreeDialog1 = () => {
    setShowAlertDialog1(true);

    setTimeout(() => {
      setShowAlertDialog1(false);
    }, 3000);

    handleCloseDiaglog1();
  };

  const handleClickOpenDiaglog2 = () => {
    setOpenDialog2(true);
  };

  const handleCloseDialog2 = () => {
    setOpenDialog2(false);
  };

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />;
  });

  return (
    <React.Fragment>
      {/* ***   Dialog 1    *** */}
      {showAlertDialog1 && <SimpleAlert />}
      <Typography gutterBottom variant='h5'>
        Basic Dialog
      </Typography>
      {/* Alert for this Dialog if click Agree */}
      <Box display='flex' justifyContent='center' alignItems='center'>
        <Button variant='outlined' onClick={handleClickOpenDiaglog1}>
          Open alert dialog
        </Button>
      </Box>
      <Dialog
        fullWidth
        open={openDialog1}
        onClose={handleCloseDiaglog1}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'>
        <DialogTitle id='alert-dialog-title'></DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            The alert of this Dialog will show here
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDiaglog1}>Disagree</Button>
          <Button onClick={handleClickAgreeDialog1} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>

      {/* ***   Dialog 2    *** */}
      <Typography gutterBottom variant='h5'>
        Forms Dialog
      </Typography>
      <Box display='flex' justifyContent='center' alignItems='center'>
        <Button variant='outlined' onClick={handleClickOpenDiaglog2}>
          Open from Dialog
        </Button>
      </Box>
      <Dialog
        TransitionComponent={Transition}
        open={openDialog2}
        onClose={handleCloseDialog2}
        fullScreen>
        {/* Appbar of Dialog */}
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge='start'
              color='inherit'
              onClick={handleCloseDialog2}
              aria-label='close dialog 2'>
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant='h6' component='div'>
              Subscribe
            </Typography>
            <Button autoFocus color='inherit' onClick={handleCloseDialog2}>
              Save
            </Button>
          </Toolbar>
        </AppBar>
        <DialogTitle>Title of Dialog</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Subscribe to get the newest alert
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin='dense'
            id='name'
            name='email'
            label='Your email'
            type='email'
            fullWidth
            variant='standard'></TextField>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
