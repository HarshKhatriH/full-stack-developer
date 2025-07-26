// import { Route, Routes } from "react-router-dom";

import { Link } from "react-router-dom";

export default function Linkroutes()
{
    return (
        <div style={{display:"flex", justifyContent:"space-evenly"}}>

            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/user"}>User</Link>
            <Link to={"/login"}>Login</Link>
            <Link to={"/cred2"}>Cred</Link>
            {/* <Link to={"/user/:id"}>singleUser</Link> */}
            

 
            
        </div>
    )
}