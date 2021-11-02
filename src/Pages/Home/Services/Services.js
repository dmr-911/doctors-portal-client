import React, { useEffect, useState } from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from '@mui/material';
import Service from '../Service/Service';
import Typography from "@mui/material/Typography";


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
        .then(data => setServices(data));
    },[])
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Container>
          <Typography
            sx={{ fontWeight: 500, color: "success.main", m: 2 }}
            variant="h6"
            component="div"
          >
            {" "}
            Our Services
          </Typography>
          <Typography sx={{ fontWeight: "bold", m: 3 }} variant="h4" component="div">
            Service We Provide
          </Typography>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {services.map((service, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <Service service={service}></Service>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    );
};

export default Services;