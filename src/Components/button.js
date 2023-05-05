import React, { useState } from "react";

import './component.css'
const Button =()=>{
    const [text, setText]=useState("Click Here");

    const changeText=()=>{
        setText("You Clicked");
    }
    const handleClick=()=>{
       console.log("button clicked..............")
    }

    return(
        <>
          <button className="button" onClick={changeText}>{text}</button>
{/* 
          <button onClick={handleClick}>button clicked</button> */}
        </>
    )

}
export default Button;

