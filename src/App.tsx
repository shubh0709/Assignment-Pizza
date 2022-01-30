import React, { useEffect, useState} from 'react';
import './App.css';
import {MediaCard, Header, Home, Checkout} from './views/index'
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Loader from './views/loader';
import {Routes, Route} from 'react-router-dom';

function App() {
  let loading = useSelector((state: any) => state?.processFetch?.loading);
  
  return (
    <div className="App">
      { loading 
         ? <Loader/> 
         : <div>
            <Routes>
              <Route path="/" element={ <Home/> } />
              <Route path="/checkout" element={ <Checkout/> } />
            </Routes>
          </div>
        }
      </div>
  );
}

export default App;