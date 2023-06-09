
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary" data-bs-theme="dark">
                <div className="container">
                    <a className="navbar-brand fw-bold" href="#">ReactApp</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active fw-bold" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold" href="/contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <Link class="btn btn-outline-light fw-bold" to="users/add" >Add User</Link> 
                   
                </div>
            </nav>
        </>
    )
}

export default Navbar;