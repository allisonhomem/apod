import React, {  useState, useEffect } from "react";
import axios from 'axios';
import Header from './Header.js';
import Body from './Body.js';
import "./App.css";
import styled from 'styled-components';
import theme from './theme/index.js';

const StyledApp = styled.div `
  text-align: center;
  font-family: ${pr => pr.theme.fontMain};
  color: ${pr => pr.theme.darkColor};
`

function App() {
  const [ apodData, setApodData ] = useState({});

  useEffect(() => {
    console.log('fetching data');
    axios.get('https://api.nasa.gov/planetary/apod?api_key=xQXySdxom5h6szZtFdwgAqy78wLBXaylm2DpxbDm')
         .then(res => {
           setApodData(res.data);
         })
         .catch(err => {
           console.error('failed to get data')
         })
  }, []);

  return (
    <StyledApp theme={theme}>
     <Header date={apodData.date} />
     <Body apodData={apodData} />
    </StyledApp>
  );
}

export default App;
