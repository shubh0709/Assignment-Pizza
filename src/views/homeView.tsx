import React, { useEffect, useState} from 'react';
import {MediaCard} from './cardView';
import {Header} from './headerView';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Loader from './loader';
import {Routes, Route} from 'react-router-dom';

export function Home() {
  let loading = useSelector((state: any) => state?.processFetch?.loading);
  let storeData = useSelector((state: any) => state?.processFetch?.items)?? [];

  return (
    <div className="Home">
      { loading 
         ? <Loader/> 
         : <div>
            <div>
              <Header />
            </div>     
            <Box sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              margin: "1rem"
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
