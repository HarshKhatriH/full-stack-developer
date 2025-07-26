// import Getaxios from "./component/Getaxios";
import axios from "axios";
import { useEffect, useState } from "react";

export default function App() 
{
  const [details,setDetails] = useState([]);
   async function getData()  {
        await axios.get("https://jsonplaceholder.typicode.com/users" /* , {
          params: {
            id: 6
          } */
        )
        .then( function(res) {
          setDetails(res.data)
        } )
        .catch((err) => {console.log(err)});
    }

    useEffect(() => {
      getData();
    },[]);

    // -----------------add data-------------

   async function addData() {
        await axios.post('https://jsonplaceholder.typicode.com/posts', {
           name:"harsh",
           age:24
          })
        .then(function (response) {
          setDetails(prev => [...prev,response.data])
        })
        .catch(function (error) {
          console.log(error);
   });
   }

  //  addData(); 



  return (
    <div style={{display:"flex", justifyContent:"center", alignContent:"center"}} >
       Hello

       <div>
       {
        details.map((item)=>{
          return <p>  {item.name} </p>

       })
       }
       </div>

       <div>
         <button onClick={()=> {addData()} }>Add Data</button>
       </div>


    </div>
  );
}


