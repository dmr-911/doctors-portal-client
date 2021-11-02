import React from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import doctor from '../../../images/appointment/doctor.png';
import bg from '../../../images/appointment/appointment-bg.png'
import { Typography } from '@mui/material';

const appointmentBg = {
    background: `url(${bg})`
}

const AppointmentBanner = () => {
    return (
      <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
              <img src={doctor} style={{width: 400, height: 'auto'}} alt="" />
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