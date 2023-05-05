import { useEffect, useState } from "react";
import React from "react";

const Count = () =>{
   
    const [count1 , setCount1]=useState(0);
    const handleIncrement =() =>{
        setCount1( count1 + 1);
    };

    const handleDecrement = () =>{
        setCount1(count1 -1);
    }
    useEffect( () =>{
      console.log("useEffect called......")
    });
    return(
        <>
        <h1> Count is {count1}</h1>
        <button type="button" onClick={handleIncrement}>Count Increment</button>
        <button onClick={handleDecrement}>Count Decrement</button>

        </>
    )
}
export default Count;