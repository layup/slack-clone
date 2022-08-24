import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar';
import styled from 'styled-components';
import Chat from './components/Chat';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <AppBody>
          <Sidebar/> 
          <Routes>
            <Route path="/" exact element={<Chat/>}>
    
            </Route>
          </Routes>
        </AppBody>
      </BrowserRouter>
    </div>
  );
}

export default App;


const AppBody = styled.div`
  display:flex; 
  height: 100vh; 
`
