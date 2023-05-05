import React, { useState } from "react";
import Navbar from "../layout/Navbar";


const Contact = () => {
    const [user, setUser] = useState({
        // name : " ",
        email: " ",
        password: " "
    })
 
    let name , value;
    const getUserData = (event) => {
        name= event.target.name;
        value= event.target.value;
        setUser({ ...user, [name]: value })
    }
const  {email,password}=user;
    const postData = async(e) =>{
        e.preventDefault();
        const response = await fetch("https://react-contact-form-f53f2-default-rtdb.firebaseio.com/reactcontactform.json",
        {
            method : "POST",
            headers :{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
 
         },
        )
        if(response){
            setUser({
                email: " ",
                password: " "
            })
            alert("Data Stored Successfully.......")
        }
      

    }
    return (
        <>
            <Navbar />
            <h1 className="text-center mt-3">Welcome To Contact Page</h1>
            <form class="w-50 mx-auto shadow p-5 mt-5" method="POST">
                <h2 class="text-center">Contact Form</h2>
                {/* <div class="mb-3">
                    <label for="exampleInputName1" class="form-label">Name</label>
                    <input type="text"
                        class="form-control p-3"
                        placeholder="Enter Name"
                        name="name"
                        value={user.name}
                        onChange={getUserData}
                        autoComplete="off"
                        required
                    />
                </div> */}
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email"
                        class="form-control"
                        placeholder="Enter Email"
                        name="email"
                        value={user.email}
                        onChange={getUserData}
                        autoComplete="off"
                        required
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input
                        type="password"
                        class="form-control p-3"
                        id="inputPassword"
                        placeholder="Enter Password"
                        name="password"
                        value={user.password}
                        onChange={getUserData}
                        autoComplete="off"
                        required />
                </div>

                <button type="submit" class="btn btn-primary" onClick={postData}>Submit</button>
            </form>

        </>
    )
}
export default Contact;