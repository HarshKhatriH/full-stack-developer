import { Link } from "react-router-dom";




export default function User({item})
{
    return (
        <div style={{ display:"flex", border:"1px solid black", height:"100px", width:"1000px", fontSize:"20px"}}>
            
            <div style={{ display:"flex", justifyContent:"space-evenly", gap:"50px"}}>
              <p>{item.id}</p>
              <img src={item.avatar} alt={item.first_name} />
              <p>{item.first_name}</p>
              <p>{item.last_name}</p>
              <p>{item.email }</p>
              <button> 
                <Link to={`/singleUser/${item.id}`} >click</Link>
              </ button>
            </div>  

         
        </div>
    )
}