import React from "react";
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import App from "./App.js";
import Page2 from "./Page2.js";

function MainPage(){
    return(
        <BrowserRouter>
    <Routes>
        <Route  path="/" element={<App/>}/>
        <Route path="Profile" element={<Page2/>}/>
    </Routes>
    </BrowserRouter>
        )
}

export default MainPage;