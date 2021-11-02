import React from 'react';
import chair from '../../../images/banner/chair.png';
import bg from '../../../images/banner/bg.png';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Container, Typography } from '@mui/material';

const bannerBackground = {
    background: `url(${bg})`,
};

const verticalCenter = {
    display: 'flex',
    height: 450,
    alignItems: 'center'
}

const Banner = () => {
    return (
      <Container style={bannerBackground}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} style={{ ...verticalCenter,textAlign: "left" }}>
                <Box>
              <Typography variant="h3">
                Your New Smile <br />
                Starts Here
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontSize: 14, color: "gray", fontWeight: 300, my: 3 }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
                tempore mollitia dolor est quasi nobis laboriosam veniam sint
                molestias eius?
              </Typography>
              <Button
                variant="contained"
                style={{ backgroundColor: "#4CE7ED" }}
              >
                Get Appointment
              </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} style={verticalCenter}>
              <img src={chair} alt="" style={{ width: 350 }} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    );
};

export default Banner;