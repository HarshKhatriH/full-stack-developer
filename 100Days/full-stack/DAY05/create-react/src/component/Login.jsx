import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContexts } from "../context/Createcontexx";



const initialData = {
  username: "emilys",
  password: "emilyspass",
};

export default function Login()
{
    const[data,setData] = useState(initialData);
    const {setIsAuth} = useContext(AppContexts)
    const{setToken} = useContext(AppContexts);
    const navigate = useNavigate();
    function changeHandler(e)
    {
        const {name,value} = e.target;
        setData((prev) => ({...prev,[name]:value}))
    }

    const submitHandler = async (e) =>
    {
        e.preventDefault();
        // console.log("s")
        // console.log(data);

         const response = await fetch('https://dummyjson.com/auth/login', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(data)
        })
        const res = await response.json()
        // console.log(res);
        setToken(res.accessToken);
        setIsAuth(true);
        navigate('/cred2')
        
    }

    return (
        <div>
            
            Login
           <form onSubmit={submitHandler}>
                <div>
                     <input type="text" 
                     name="username"
                     value={data.username}
                     placeholder="write your email"
                     onChange={changeHandler} />
                </div>
                <div>
                     <input type="text" 
                     value={data.password}
                     name="password"
                     placeholder="write your pass"
                     onChange={changeHandler} />
                </div>

                <button >Submit</button>
           </form>
        </div>
    )
}