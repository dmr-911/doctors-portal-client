import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';

const AvailableAppointments = ({ date }) => {
    const bookings = [
      {
        key: 1,
        name: "Teeth Orthodonics",
        time: "08.00 AM - 09.00 AM",
        space: 10,
      },
      {
        key: 2,
        name: "Cosmetic Dentistry",
        time: "09.00 AM - 10.00 AM",
        space: 8,
      },
      {
        key: 3,
        name: "Teeth Cleaning",
        time: "10.00 AM - 11.00 AM",
        space: 8,
      },
      {
        key: 4,
        name: "Pediatric Dental",
        time: "06.00 PM - 07.00 PM",
        space: 10,
      },
      {
        key: 5,
        name: "Cavity Protection",
        time: "11.00 AM - 12.00 PM",
        space: 5,
      },
      {
        key: 6,
        name: "Oral Surgery",
        time: "07.00 PM - 08.00 PM",
        space: 10,
      }
    ];
    return (
      <Container>
        <Typography variant="h4" sx={{ color: "info.main", mb: 5 }}>
          Available appointments {date.toDateString()}
        </Typography>

        <Grid container spacing={2}>
          {bookings.map((booking) => (
            <Booking key={booking.key} date={date} booking={booking}></Booking>
          ))}
        </Grid>
      </Container>
    );
};

export default AvailableAppointments;