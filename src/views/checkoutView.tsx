import React, { useEffect, useState} from 'react';
import {MediaCard} from './cardView';
import {Header} from './headerView';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Loader from './loader';
import {Routes, Route} from 'react-router-dom';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';


export function Checkout() {
  const customerOrdered = useSelector( (state:any) => state?.checkout || [{}]);
  let keyCnt = 0;
  console.log("customerOrdered", customerOrdered);
  const arr= [];


  return (
    <div className="Checkout">
          <Header/>
         <Box>      
          <div> {customerOrdered.pizzaSize}</div>
          </Box>
         <Box>      
         <Card elevation={6}>
            Your Orders:
            <p>{customerOrdered.pizzaName} </p>
            <p>{customerOrdered.pizzaSize} </p>
            <div>
              {customerOrdered.pizzaToppings}
            </div>
          </Card>
         </Box>
      </div>
  );
}
