import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const SingleProduct = props => {
  const { name, description, img } = props.service;
  return (
    <Card sx={{ maxWidth: 340, m: 1 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image={img}
          alt="green iguana"
        />
        <CardContent style={{ textAlign: 'start' }}>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
};

export default SingleProduct;

// import React from 'react';
// import Grid from '@mui/material/Grid';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';

// const SingleProduct = props => {
//   const { name, description, img } = props.service;
//   return (
//     <Grid item xs={4} sm={4} md={4}>
//       <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
//         <CardMedia
//           component="img"
//           style={{ width: 'auto', height: '80px', margin: '0 auto' }}
//           image={img}
//           alt="green iguana"
//         />
//         <CardContent>
//           <Typography variant="h5" component="div">
//             {name}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             {description}
//           </Typography>
//         </CardContent>
//       </Card>
//     </Grid>
//   );
// };

// export default SingleProduct;
