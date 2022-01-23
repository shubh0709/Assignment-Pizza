import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface PropsRecieved {
    pizzaToppingsProp : any, 
    AddThisTopping:any
}

export default function toppingsView(prop: PropsRecieved){
    console.log("pizzaToppingsProp: ",prop.pizzaToppingsProp);    

    return (<Box>
        
        <Typography> {prop.pizzaToppingsProp[0]?.title} </Typography>
        
         { 
           prop.pizzaToppingsProp[0]?.items.map((obj:any)=>{
               return (<>
                <Typography> {obj?.name} </Typography>
                <Button onClick={prop.AddThisTopping(obj?.name)}>Add </Button>
                </>)
            })
        } 
        
         </Box>);
}