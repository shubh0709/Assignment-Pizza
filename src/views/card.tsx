import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Pizza } from '../state';

export default function MediaCard({ pizza }: any) {
  console.log("MediaCard prop recieved:");
  console.log(pizza);

  return (
    <Card sx={{ minWidth: 300, maxWidth: 600 }}>
      <CardMedia
        component="img"
        height="140"
        image={pizza?.img_url}
        alt="sorry"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {pizza?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {pizza?.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
