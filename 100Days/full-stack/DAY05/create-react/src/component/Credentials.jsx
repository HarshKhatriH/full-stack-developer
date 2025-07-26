import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function Credentials()
{
    const [IsAuth] = useState(false);

    if(!IsAuth)
    {
       return <Navigate to={"/login"} />

    }
    return(
        <div>
            Credentails number 1

        </div>
    )

}