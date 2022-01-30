import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Customisation from './customisationView';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  components: {
    // Name of the component ⚛️
    MuiTypography: {
      defaultProps: {
        // The default props to change
        display: "block",
        marginBottom: "10px"
      },
    },
  },
});

export function MediaCard({ pizza }: any) {
  
  return (
    <ThemeProvider theme={theme}>
    <Card sx={{ 
      width: 250,
      display: 'flex',
      margin: "1rem",
      flexDirection: "column", 
      }}>
      <CardMedia
        component="img"
        height="140"
        image={pizza?.img_url}
        alt="sorry"
      />
      <CardContent sx={{ flexGrow:1}}>
        <Typography  align="center" lineHeight="1.3"  variant="subtitle2" component="div">
          {pizza?.name}
        </Typography>
        <Typography  align="center" lineHeight="1" variant="caption" color="text.secondary">
          {pizza?.description}
        </Typography>
      </CardContent>
      <Rating
        precision={0.5}
        readOnly
        value={pizza?.rating}
        name="size-small"
        defaultValue={2}
        size="small"
        sx= {{alignSelf: "center"}}
        />
      <CardActions>
        <Customisation selectedPizza = {pizza}/>
      </CardActions>      
    </Card>
    </ThemeProvider>
  );
}
