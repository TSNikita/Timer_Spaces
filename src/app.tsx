import React from 'react';

import Home from "./pages/Home/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Timer from "./pages/Timer/Timer";
import CountDown from "./pages/CountDown/CountDown";

import styled from "styled-components";

const AppWrapper = styled.div `
    width: 1200px;
    height: 800px;
    margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  
`


function App() {
    return (
    <div>
        <AppWrapper>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/timer" element={<Timer/>} />
                <Route path="/countDown" element={<CountDown/>} />
            </Routes>
        </BrowserRouter>
        </AppWrapper>
    </div>


    );
}

export default App;
