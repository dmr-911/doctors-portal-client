import React from 'react';
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Button, TextField } from '@mui/material';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({ handleBookingClose, openBooking, booking, date }) => {
  const { name, time } = booking;
  const handleFormSubmit = e => {
    e.preventDefault();

    alert('Submitted');
    handleBookingClose();

  }
    return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openBooking}
        onClose={handleBookingClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openBooking}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {name}
            </Typography>
            <form onSubmit={handleFormSubmit}>
              <TextField
                disabled
                label="Time"
                id="filled-size-small"
                defaultValue={time}
                variant="filled"
                size="small"
                sx={{ m: 2 }}
              />
              <TextField
                label="Your Name"
                id="filled-size-small"
                defaultValue="Your Name"
                variant="filled"
                size="small"
                sx={{ m: 2 }}
              />
              <TextField
                label="Email"
                id="filled-size-small"
                defaultValue="Your Email"
                variant="filled"
                size="small"
                sx={{ m: 2 }}
              />
              <TextField
                label="Phone"
                id="filled-size-small"
                defaultValue="Phone Number"
                variant="filled"
                size="small"
                sx={{ m: 2 }}
              />
              <TextField
                disabled
                label="Date"
                id="filled-size-small"
                defaultValue={date.toDateString()}
                variant="filled"
                size="small"
                sx={{ m: 2 }}
              />
              <br />
              <Button type="submit" sx={{mx: 2}} variant="contained">Submit</Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    );
};

export default BookingModal;