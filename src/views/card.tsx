import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { Pizza, State } from '../state';


export default function MediaCard({ pizza }: any) {
  console.log("MediaCard prop recieved:");
  console.log(pizza);

  return (
    <Card sx={{ width: 250 }}>
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
      <Rating
        precision={0.5}
        readOnly
        value={pizza?.rating}
        name="size-small"
        defaultValue={2}
        size="small"
        />
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
