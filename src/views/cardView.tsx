import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Customisation from './customisationView';


export function MediaCard({ pizza }: any) {
  const [openCustomistaion, setCustomisation] = useState(false);
  // console.log("inside card pizza prop",pizza);    

  
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
        <Customisation selectedPizza = {pizza}/>
      </CardActions>
      
    </Card>
  );
}
