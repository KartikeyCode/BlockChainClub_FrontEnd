import React from "react";
import "./App.css"
import Container from "./Leftcontainer";
function Page2(){
    return(
        <>
        <h1 className='Logo'>ASTRA</h1>
        <div className="P2Containers">
            <div className="TopContainer">
            <Container/>
            </div>
            <div className="FormContainer">
            <form className="Form">
                <input type="text" className="InputMain" placeholder="Upload your resume"></input>
                <hr className="Line"/>
                <div className="Across">
                <div className="Circle">
                    John
                </div>
                <input type="text" className="InputName" placeholder="John Doe"></input>
                </div>
                <input type="text" className="InputLocation" placeholder="Albania"></input>
                <input type="text" className="InputSub" placeholder="✉️ v4Vishnu@gmail.com"></input>
                <input type="text" className="InputSub" placeholder="📞 +355 434 234 242 3"></input>
                <hr className="Line1"/>
                <input type="text" className="InputMain" placeholder="🌸 Overall Experience"></input>
                <hr className="Line"/>
                <input type="text" className="InputMain" placeholder="📆 Availability"></input>
            </form>
            </div>
        </div>
        </>
    )
}

export default Page2;