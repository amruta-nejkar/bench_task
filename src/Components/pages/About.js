import React from "react";
import Navbar from "../layout/Navbar";


const About = () =>{
    return(
        <>
           <Navbar />
        <h1 class="text-center mt-3">About Page</h1>
        <div className="container">
        <p className="lead">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur consequatur nihil, modi distinctio, laudantium quidem est dolorum at laborum tenetur voluptatibus deleniti reiciendis optio nam? Unde delectus deleniti ab voluptas!
        </p>

        <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, est ex consequuntur officia voluptas molestiae reprehenderit cupiditate nihil expedita? Optio esse nostrum laborum sunt? Fuga ipsa vero atque architecto vel.
        </p>

        <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, est ex consequuntur officia voluptas molestiae reprehenderit cupiditate nihil expedita? Optio esse nostrum laborum sunt? Fuga ipsa vero atque architecto vel.
        </p>
        </div>
        </>
    )
}
export default About;