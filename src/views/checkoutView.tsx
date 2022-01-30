import React, { useEffect, useState} from 'react';
import {MediaCard} from './cardView';
import {Header} from './headerView';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Loader from './loader';
import {Routes, Route} from 'react-router-dom';

export function Checkout() {
  const customerOrdered = useSelector( (state:any) => state?.checkout?.pizzaSize || [{}]);
  let keyCnt = 0;
  console.log("customerOrdered", customerOrdered);
  
  return (
    <div className="Checkout">
          <Header/>
         <Box>      
          <div> {customerOrdered}</div>
          </Box>
      </div>
  );
}
