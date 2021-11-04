import { Grid } from '@mui/material';
import React from 'react';
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date }) => {
  const { name, time, spaces } = booking;
        const [openBooking, setOpenBooking] = React.useState(false);
        const handleBookingOpen = () => setOpenBooking(true);
        const handleBookingClose = () => setOpenBooking(false);
  return (
      <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{ py: 5 }}>
          <Typography sx={{ color: "info.main" , fontWeight: 600}} variant="h5">
            {name}
          </Typography>
          <Typography variant="h6">{time}</Typography>
          <Typography variant="caption" display="block">
            {spaces} SPACES AVAILABLE
          </Typography>
          <Button onClick={handleBookingOpen} variant="contained">Book Appointment</Button>
        </Paper>
      </Grid>
      <BookingModal
        handleBookingClose={handleBookingClose}
        openBooking={openBooking}
        booking={booking}
        date={date}
      >

      </BookingModal>
      </>
    );
};

export default Booking;