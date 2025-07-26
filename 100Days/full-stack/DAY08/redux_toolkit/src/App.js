// import { useState } from "react"
import "./App.css"
import { useDispatch, useSelector } from "react-redux"
import { increment,decrement } from "./component/Redux/Store/Counterslice";

export default function App()
{

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrement()
  {
    dispatch(increment())
  }

   function handleDecrement() 
  {
    dispatch(decrement())
  }
  return(
    <div >
       <div style={{ backgroundColor:"skyblue", textAlign:"center" ,  border:"1px solid black" , height:"150px" , width:"400px", margin:"auto", marginTop:"20%"}}>
        <div style={{fontSize:"20px"}}>{count}</div>
        <br></br>
         <div>
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleDecrement}>Decrement</button>
         </div>
        
       </div>

    </div>
  )
}
