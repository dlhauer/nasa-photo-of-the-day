import React, {useState, useEffect} from "react";
import "./App.css";
import PhotoList from './components/PhotoList';
import styled from 'styled-components';

const AppDiv = styled.div`
  font-family: 'Helvetica Neue';
`

function App() {
  return (
    <AppDiv className="App">
      <PhotoList/>
    </AppDiv>
  );
}

export default App;
