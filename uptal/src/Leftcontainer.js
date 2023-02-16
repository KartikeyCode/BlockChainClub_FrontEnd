import React from "react";
import CheckImage from "./pictures/check.png"
import HomeImage from "./pictures/home.png"
import SquareImage from "./pictures/square.png"
function Container(){
    return(
        <div className='TopContainer-Left'>
          <div className='AFJ'>
            <img className="AFJ-Image" src={CheckImage}></img>
            <h2 className='AFJ-Text'>Available for Job</h2>
          </div>
          <div className='Home'>
            <img className="Home-Image" src={HomeImage}></img>
            <h2 className='TCL-Text'>Home</h2>
          </div>
          <div className='LB'>
            <div className='Profile'>
            <img src={CheckImage} className="Profile-Image"></img>
            <h2 className='TCL-Text LB-Text'> Profile</h2>
            </div>
            <div className='Apply'>
              <img src={SquareImage} className="Apply-Image"></img>
              <h2 className='TCL-Text LB-Text'> Apply for Jobs</h2>
            </div>
            <div className='Mail'>
              <img src={SquareImage} className="Apply-Image"></img>
              <h2 className='TCL-Text LB-Text'>Mail Box</h2>
            </div>
            </div>
            </div>
        )
}

export default Container;