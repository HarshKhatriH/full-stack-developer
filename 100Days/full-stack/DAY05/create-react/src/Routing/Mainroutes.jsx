import { Route, Routes } from "react-router-dom";
import Home from "../component/Home";
import About from "../component/About";
import User from "../component/User";
import Login from "../component/Login";
// import Credentials from "../component/Credentials";
import CredentialsTwo from "../component/Credentialstwo";
import Singleuser from "../component/Singleuser";

export default function Mainroutes()
{
    return (
        <div style={{display:"flex", justifyContent:"center", marginTop:"20px", fontSize:"30px"}}>
             <Routes >  
                <Route path="/" element={<Home />}> </Route>
                <Route path="/user" element={<User />}> </Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/cred2" element={<CredentialsTwo />}></Route>
                <Route path="/singleUser/:id" element={<Singleuser />}></Route>

            </Routes>

        </div>
    )
}