import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Form from './Form';

const FormDialog=() =>{
  const [open, setOpen] = React.useState(false);
  const [buttonLabel, setButtonLabel] = React.useState('Click me');

  const handleClickOpen = () => {
    setOpen(true);
    setButtonLabel('You clicked');
  };

  const handleClose = () => {
    setOpen(false);
    setButtonLabel('Click me');
  };

  return (
    <div>
      <Button sx={{borderRadius: '10px', border: '1px solid black', textTransform: 'capitalize', margin:'10px 10px', color:'black'}} variant="outlined" onClick={handleClickOpen}>
        {buttonLabel}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
        <Form />
        </DialogContent>
        <DialogActions>
          <Button sx={{color:'black'}} onClick={handleClose}>Disagree</Button>
          <Button sx={{color:'black'}} onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default FormDialog;