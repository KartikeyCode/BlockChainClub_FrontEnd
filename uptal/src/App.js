import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import MainImage from "./pictures/main.png"
import ArrayElements from './ArrayElement';
import Container from './Leftcontainer';
function App() {
  return (
    <>
    <div>
      <h1 className='Logo'>ASTRA</h1>
      <div className='Containers'>
      <div className='TopContainer'>
        <Container/>
        <div className='TopContainer-Right'>
          <div>
          <h1 className='TCL-Text Welcome'>Welcome John!</h1>
          <h2 className='Sub'>How to get jobs with top U.S. companies</h2>
          </div>
          <div className='TCR-Array'>
            <ArrayElements/>
          </div>
          <div>
           <img className="Main" src={MainImage}></img>
          </div>
          </div>
      </div> 
      </div>
      </div>
    </>
  );
}

export default App;
