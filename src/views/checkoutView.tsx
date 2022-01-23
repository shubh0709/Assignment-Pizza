import React, { useEffect, useState} from 'react';
import {MediaCard} from './cardView';
import {Header} from './headerView';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Loader from './loader';
import {Routes, Route} from 'react-router-dom';

export function Checkout() {
  return (
    <div className="Checkout">
          <Header />
         <p> Welcome to Checkout View </p>    
      </div>
  );
}
