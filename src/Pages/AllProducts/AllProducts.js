import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import SingleProduct from '../Shared/SingleProduct/SingleProduct';

const services = [
  {
    name: 'Fluoride Treatment',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
    img: 'https://i.ibb.co/5v1Z1p7/ojaswi-pratap-singh-92-JZf-qkw-TE-unsplash.jpg',
  },
  {
    name: 'Cavity Filling',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
    img: 'https://i.ibb.co/5v1Z1p7/ojaswi-pratap-singh-92-JZf-qkw-TE-unsplash.jpg',
  },
  {
    name: 'Teeth Whitening',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
    img: 'https://i.ibb.co/5v1Z1p7/ojaswi-pratap-singh-92-JZf-qkw-TE-unsplash.jpg',
  },
];

const AllProducts = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography
          sx={{ fontWeight: 500, m: 2, color: 'success.main' }}
          variant="h6"
          component="div"
        >
          OUR SERVICES
        </Typography>
        <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
          Services We Provide
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map(service => (
            <SingleProduct key={service.name} service={service}></SingleProduct>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AllProducts;
