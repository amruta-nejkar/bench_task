import React from "react";

const Profile=(prop)=>{

    return(
        <>
          <h1>{prop.data}</h1>
          <p>{prop.text.name}</p>
          
        </>
    )
}

export default Profile;