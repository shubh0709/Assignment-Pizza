import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface PropsRecieved {
    pizzaSizeProp : any,
    selectedSize: any
}


export default function pizzaSize(prop : PropsRecieved ){
    console.log("pizzaSizeProp: ",prop.pizzaSizeProp);    

    return (<Box>
        <Typography> {prop.pizzaSizeProp[0]?.title} </Typography>
        { 
            prop.pizzaSizeProp[0]?.items.map((obj:any)=>{
              return ( <>
                <Typography> {obj?.size} </Typography>
                <Button onClick={prop.selectedSize(obj?.size)}>Add </Button>
                </>)
            })
        }

        
         </Box>);
}