import React from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import doctor from '../../../images/appointment/doctor.png';
import bg from '../../../images/appointment/appointment-bg.png'
import { Typography } from '@mui/material';

const appointmentBg = {
  background: `url(${bg})`,
  backgroundColor: "rgba(45, 58, 74, 0.9)",
    backgroundBlendMode: "darken, luminosity",
  marginTop: 174
};

const AppointmentBanner = () => {
    return (
      <Box style={appointmentBg} sx={{ flexGrow: 1, mb: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
              <img src={doctor} style={{width: 400, height: 'auto', marginTop: '-100px'}} alt="" />
          </Grid>
          <Grid item xs={12} md={6}>
              <Typography variant="h6">
                  Appointment
              </Typography>
          </Grid>
          </Grid>
      </Box>
    );
};

export default AppointmentBanner;