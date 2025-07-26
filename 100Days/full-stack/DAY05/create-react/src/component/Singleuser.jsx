import { useState } from "react";
import { useParams } from "react-router-dom"

export default function Singleuser()
{

    const {id} = useParams();
    const[singleUser,setSingleUser] = useState([])

    const getData = async () =>{
     const response = await fetch(`https://reqres.in/api/users/${id}`,{
        method:"GET",
        headers:{
                "x-api-key": "reqres-free-v1",
            }
        })
        const res = response.json();
        console.log(res , "inside ");
    }
    return(
        <div>
            Inside Single User
            {
                console.log(id)
            }



           


        </div>
    )
}