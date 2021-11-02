import React from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from '@mui/material';
import chair from '../../../images/banner/chair.png';
import Calendar from '../../Shared/Calendar/Calendar';

const AppointmentHeader = ({date, setDate}) => {
    return (
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <Calendar date={date} setDate={setDate}></Calendar>
            </Grid>
            <Grid item xs={12} md={6}>
                        <img src={chair} alt="" style={{width: '100%'}}/>
            </Grid>
            </Grid>
        </Box>
      </Container>
    );
};

export default AppointmentHeader;