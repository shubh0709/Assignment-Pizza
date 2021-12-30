import React, { useEffect, useState, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import MediaCard from './views/card'
import ResponsiveAppBar from './views/header';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators, State, ActionType, Action, Pizza } from './state';
import { fetcher } from './node/index';
import Box from '@mui/material/Box';


function App() {
  const dispatch = useDispatch();
  const { initialiseStore } = bindActionCreators(actionCreators, dispatch);
  const [storeData, updateData] = useState([{}]);

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      fetch('https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68')
        .then(res => res.json())
        .then(res => {
          if (res.error) {
            throw (res.error);
          }
          console.log("pringiting response form fetcher");
          console.log(res);
          return res;
        })
        .then(res => {
          console.log("useEffect data: ");
          console.log(res);
          initialiseStore(res);
          return res;
        })
        .then((res) => {
          updateData(res);
        })
    }
    return () => {
      mounted = false;
    }
  }, []);

  //updateData(useSelector((state: State) => state?.pizzaInfo?.data));
  console.log("pizzaInfo state: ");
  console.log(storeData);
  let cnt = 0;
  return (
    <div className="App">
      <div>
      <ResponsiveAppBar />
      </div>
      <Box sx={{
        display: "inline-flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        alignContent: "space-between",
        }}>
        {storeData.map(function (value, index) {
          return <MediaCard pizza={value} />
        })}
      </Box>
    </div>
  );
}

export default App;