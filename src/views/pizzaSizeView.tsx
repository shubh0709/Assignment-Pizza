import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useState} from 'react';

interface PropsRecieved {
    pizzaSizeProp : any,
    selectedSize: any
}


export default function pizzaSize(prop : PropsRecieved ){
    console.log("pizzaSizeProp: ",prop.pizzaSizeProp);    
    let keyCnt=0;
    return (<Box>
        <Typography> {prop.pizzaSizeProp[0]?.title} </Typography>
        { 
            prop.pizzaSizeProp[0]?.items.map((obj:any)=>{
                keyCnt++;
              return ( <div key={keyCnt}>
                <Typography> {obj?.size} </Typography>
                <Button onClick={prop.selectedSize(obj?.size)}>Add </Button>
                </div>)
            })
        }

        
         </Box>);
}