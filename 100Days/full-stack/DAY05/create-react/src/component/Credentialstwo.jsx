import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AppContexts } from "../context/Createcontexx";
import User from "./User";



export default function CredentialsTwo()
{
    const {IsAuth} = useContext(AppContexts);
    // const{token} = useContext(AppContexts);
    const[details,setDetails] = useState([]);
    const[page,setPage] = useState(1);
    // const url = `https://reqres.in/api/users?page=${page}`;


    


    const getData = async() => {
      const response =   await fetch(`https://reqres.in/api/users?page=${page}`,{
            method:"GET",
            headers:{
                "x-api-key": "reqres-free-v1",
            }
        })
        const res =   await response.json();
        // console.log(res);
        setDetails(res.data);
        console.log(page)
        
}


    useEffect(()=>{
        getData(page);
        
    },[page])

    if(!IsAuth)
    {
    //   console.log(IsAuth)
       return <Navigate to={"/login"} />
    }

    return(
        <div>
            
            <div  style={{display:"flex", width:"100%", justifyContent:"center"} }>
              <button onClick={() =>{
                // setPage((prev) => ({...prev,page:1}))
                setPage(1)
        
              }}
              >Page 1</button>

              <button onClick={() =>{
                // setPage((prev) => ({...prev,page:2}))
                setPage(2);
             
              }}
              >Page 2</button>
            </div>



            <div >
                {
                    details.map((item)=>
                    {
                        return <div> 
                            <User item={item} /> 
                            </div>
                    })
                }
            </div>
        </div>
    )

}