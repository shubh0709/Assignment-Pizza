import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useState} from 'react';

interface PropsRecieved {
    pizzaToppingsProp : any, 
    AddThisTopping:any
}

export default function toppingsView(prop: PropsRecieved){
    console.log("pizzaToppingsProp: ",prop.pizzaToppingsProp);    
    let keyCnt =0;

    return (<Box>
        
        <Typography> {prop.pizzaToppingsProp[0]?.title} </Typography>
         { 
           prop.pizzaToppingsProp[0]?.items.map((obj:any)=>{
            keyCnt++;
            return ( <div key={keyCnt}>
                <Typography> {obj?.name} </Typography>
                <Button onClick={prop.AddThisTopping(obj?.name)}>Add </Button>
                </div>)
            })
        } 
        
         </Box>);
}