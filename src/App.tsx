import React, { useEffect, useState} from 'react';
import './App.css';
import {MediaCard, Header} from './views/index'
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Loader from './views/loader';

function App() {
  let loading = useSelector((state: any) => state?.processFetch?.loading);
  let storeData = useSelector((state: any) => state?.processFetch?.items)?? [];

  return (
    <div className="App">
      { loading 
         ? <Loader/> 
         : <div>
            <div>
              <Header />
            </div>
            <Box sx={{
              display: "inline-flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
              alignContent: "space-between",
            }}>
              {storeData.map(function (value:any) {
                return <MediaCard pizza={value} key={value?.id} />
              })}
            </Box>
          </div>
        }
      </div>
  );
}

export default App;