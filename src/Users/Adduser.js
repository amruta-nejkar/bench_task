import axios  from "axios";
import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
    let navigate = useNavigate();
    const [user, setUser] = useState({
        name: '',
        username: '',
        email: ''
    });

    const { name, username, email } = user;

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    };

    const onSubmitt = async(e) => {
        e.preventDefault();
        console.log("userdata" , user);
        await axios.post("http://localhost:3003/users", user)
        navigate.push("/");
    };
    return (
        <>
           
            <div className="container">
                <div className="w-75 mx-auto shadow p-5 mt-5">
                    <h2 className="text-center mb-4">Add A User</h2>
                    <form onSubmit={e => onSubmitt(e)}>
                        <div className="form-group">
                            <input type="text"
                                className="form-control form-control-lg mb-3"
                                placeholder="Enter your Name"
                                name="name"
                                value={name}
                                onChange={e => onInputChange(e)}
                            />
                            <input type="text"
                                className="form-control form-control-lg mb-3"
                                placeholder="Enter your UserName"
                                name="username"
                                value={username}
                                onChange={e => onInputChange(e)}
                            />
                            <input type="email"
                                className="form-control form-control-lg mb-3"
                                placeholder="Enter your Email"
                                name="email"
                                value={email}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <button className="btn btn-primary btn-block">Add User</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default AddUser;