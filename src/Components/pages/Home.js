import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../layout/Navbar";
import { Link } from "react-router-dom";


const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/users");
        setUsers(result.data.reverse());
    }
    const deleteUser = async (id)=>{
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();
    }
    return (
        <>
         <Navbar />
            <h1 className="text-center m-3">Home Page</h1>
            <div className="container">
            <table class="table border shadow">
                <thead>
                    <tr class="table-dark">
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link className="btn btn-primary" to={`/users/view/${user.id}`}>View</Link>
                                    <Link className="btn btn-outline-primary ms-3" to={`/users/edit/${user.id}`}>Edit</Link>
                                   <button className="btn btn-danger ms-3" onClick={() =>deleteUser(user.id)}>Delete</button>
                                    
                                </td>

                            </tr>
                        ))
                    }
                </tbody>
            </table>
            </div>
        </>
    )
}
export default Home;