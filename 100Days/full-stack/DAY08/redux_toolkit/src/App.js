// import { useState } from "react"
import "./App.css"
import { useDispatch, useSelector } from "react-redux"
import { increment,decrement, resetcount, actionpayload } from "./component/Redux/Store/Counterslice";
import { useState } from "react";

export default function App()
{

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount,setAmount] = useState(0);

  function handleIncrement()
  {
    dispatch(increment())
  }

   function handleDecrement() 
  {
    dispatch(decrement())
  }

  function resetHandler()
  {
    dispatch (resetcount())
  }

  function addHandler()
  {
    dispatch(actionpayload(amount))
  }
  return(
    <div >
       <div style={{ backgroundColor:"skyblue", textAlign:"center" ,  border:"1px solid black" , height:"150px" , width:"400px", margin:"auto", marginTop:"20%"}}>
        <div style={{fontSize:"20px"}}>{count}</div>
        <br></br>
         <div>
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleDecrement}>Decrement</button>
          <button onClick={resetHandler}>Reset</button>
         </div>

         <div>
          <input type="Number" placeholder="Enter value" value={amount} onChange={(e)=>{
             setAmount(e.target.value)
          }}></input>
          <button onClick={addHandler}>Add</button>
         </div>
        
       </div>

    </div>
  )
}
