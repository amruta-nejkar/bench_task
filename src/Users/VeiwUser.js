import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const ViewUser = () => {

    const [user, setUser] = useState({
        name: '',
        username: '',
        email: ''
    });

    useEffect(() => {
        loadUser();
    }, []);

    const { id } = useParams();
    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3003/users/${id}`);
        // console.log(result);
        setUser(res.data)

    }

    return (
        <>
            <div className="container">
                <div className="w-75 mx-auto shadow p-5 mt-5">

                    <h2 className="text-center">ViewUser</h2>
                    <Link className="btn btn-primary" to="/">Back To Home</Link>
                    <h1 className="display-4 mt-5">User Id : {id}</h1>
                    <br />
                    <ul className="list-group w-50">
                        <li className="list-group-item">Name: {user.name}</li>
                        <li className="list-group-item">User Name: {user.username}</li>
                        <li className="list-group-item">Email: {user.email}</li>

                    </ul>
                </div>
            </div>
        </>
    )
}
export default ViewUser;