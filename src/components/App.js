
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [sum ,setSum]=useState(0)
  const [curr,setCurr]=useState(0)

  useEffect(()=>{
    setSum(sum+ Number(curr))
  },[curr])
  return (
    <div>
     
      <h1>Sum calculator</h1>

      <input type="number" onChange={(e)=>{
        setCurr(e.target.value)
      }}/>
      <p>Sum : {sum}</p>

     </div>
  
  )
}

export default App
