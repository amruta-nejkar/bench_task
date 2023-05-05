import axios  from "axios";
import { useState , useEffect } from "react";
import React from "react";
import { useNavigate , useParams ,Link} from "react-router-dom";

const EditUser = () => {
    let navigate = useNavigate();
    const {id} = useParams();
    const [user, setUser] = useState({
        name: '',
        username: '',
        email: ''
    });

    const { name, username, email } = user;

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    };
    
    useEffect(() => {
        loadUser();
    }, []);

    const onSubmitt = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3003/users/${id}`, user);
        navigate.push("/");
    };

    const loadUser = async () =>{
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        // console.log(result);
       setUser(result.data)

    }
    return (
        <>
            <div className="container">
                <div className="w-75 mx-auto shadow p-5 mt-5">
                    <h2 className="text-center mb-4">Edit A User</h2>
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
                        {/* <Link className="btn btn-warning btn-block" to="/">Update User</Link> */}
                        <button className="btn btn-warning btn-block">Update User</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default EditUser;