import React, {useEffect, useReducer, useState} from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button  from '@mui/material/Button';
import Toppings from './toppingsView';
import PizzaSize from './pizzaSizeView';
import {useSelector, useDispatch} from 'react-redux';
import {actionCreators} from '../state';

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
        const dispatch = useDispatch();
        const {addToCart} = actionCreators;
        const [quantity, setQuantity] = useState(0);
        const handleOpen = () => { 
            return setOpen(true)
        };
        const handleClose = () => {
            console.log("handle close");
            dispatch(addToCart({
                pizzaName: selectedPizza?.name,
                pizzaSize: pizzaSizeRequested,
                pizzaToppings: toppingsRequested
            }));
            setOpen(false);
        }
       // console.log("selectedPizza: ",selectedPizza);    

       const pizzaSizeRequested: string[] = [];
       const toppingsRequested: string[] = [];
    
       function AddThisTopping(value:string):any{
           toppingsRequested.push(value);
           console.log(toppingsRequested);
       }

       function selectedSize(value:string):any{
        console.log("selecetedSize Name: ", value);
        pizzaSizeRequested.push(value);

       }

       // mistake found -- inside useEffect "return" hooks dont
       // work/update properly, instead use useReducer
      
      /* useEffect(()=>{
           return () => {
            if(quantity>0){
                console.log("came when quanity greater than 0");
                setQuantity((quantity:number) => 0);
                
           };
        }
       });
       */

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
                        <Button onClick={() =>  setQuantity( (quantity) => quantity+1)}> Inc Quantity </Button>
                        <Button onClick={() =>  setQuantity( (quantity) => quantity-1)}> Dec Quantity </Button>
                        <Toppings pizzaToppingsProp = {selectedPizza?.toppings}  AddThisTopping = {(val:any) => AddThisTopping(val)} />
                        <PizzaSize pizzaSizeProp = {selectedPizza?.size}  selectedSize = {(val:any) => selectedSize(val)} />
                    </Box>
                </Modal>
            </div>
        );
}
    