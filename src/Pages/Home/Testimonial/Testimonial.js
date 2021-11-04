import { Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import img1 from '../../../images/people-1.png';
import img2 from '../../../images/people-2.png';
import img3 from '../../../images/people-3.png';

const Testimonial = () => {
    return (
        <Container sx={{ mb: 5}}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "info.main",
            textAlign: "left",
            my: 3,
          }}
        >
          Testimonial
        </Typography>
        <Typography variant="h3" sx={{ textAlign: "left", mb: 7 }}>
          What's Our Patient <br /> Says
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <Paper elevation={3} sx={{ textAlign: "left", p: 3 }}>
              <Typography
                variant="p"
                sx={{ textAlign: "left", fontSize: "18px" }}
              >
                It's a long established fact that by the readable content of a
                lot layout. The point of using lorem a more-or-less normal
                distribute using Content Here
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "between",
                  py: 4,
                }}
              >
                <img src={img1} alt="" />
                <Paper elevation={0} sx={{ mx: 4 }}>
                  <Typography variant="h6" sx={{ color: "success.main" }}>
                    Winson Henry
                  </Typography>
                  <Typography variant="p">California</Typography>
                </Paper>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper elevation={3} sx={{ textAlign: "left", p: 3 }}>
              <Typography
                variant="p"
                sx={{ textAlign: "left", fontSize: "18px" }}
              >
                It's a long established fact that by the readable content of a
                lot layout. The point of using lorem a more-or-less normal
                distribute using Content Here
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "between",
                  py: 4,
                }}
              >
                <img src={img2} alt="" />
                <Paper elevation={0} sx={{ mx: 4 }}>
                  <Typography variant="h6" sx={{ color: "success.main" }}>
                    Winson Henry
                  </Typography>
                  <Typography variant="p">California</Typography>
                </Paper>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper elevation={3} sx={{ textAlign: "left", p: 3 }}>
              <Typography
                variant="p"
                sx={{ textAlign: "left", fontSize: "18px" }}
              >
                It's a long established fact that by the readable content of a
                lot layout. The point of using lorem a more-or-less normal
                distribute using Content Here
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "between",
                  py: 4,
                }}
              >
                <img src={img3} alt="" />
                <Paper elevation={0} sx={{ mx: 4 }}>
                  <Typography variant="h6" sx={{ color: "success.main" }}>
                    Winson Henry
                  </Typography>
                  <Typography variant="p">California</Typography>
                </Paper>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    );
};

export default Testimonial;