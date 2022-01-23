import React, {useEffect, useReducer, useState} from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button  from '@mui/material/Button';
import Toppings from './toppingsView';
import PizzaSize from './pizzaSizeView';


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


export default function Customisation({ selectedPizza }: any){
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);
       // console.log("selectedPizza: ",selectedPizza);    

       const pizzaSizeRequested: string[] = [];
       const toppingsRequested: string[] = [];
    
       function AddThisTopping(value:string):any{
           toppingsRequested.push(value);
       }

       function selectedSize(value:string):any{
        console.log("selecetedSize Name: ", value);
        pizzaSizeRequested.push(value);
       }

       useEffect(()=>{
           return () => {
            
           };
       });

        return (
            <div>
                <Button onClick={handleOpen}>+Add-</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx = {style}>
                        <Toppings pizzaToppingsProp = {selectedPizza?.toppings}  AddThisTopping = {() => AddThisTopping} />
                        <PizzaSize pizzaSizeProp = {selectedPizza?.size}  selectedSize = {() => selectedSize} />
                    </Box>
                </Modal>
            </div>
        );
}
    