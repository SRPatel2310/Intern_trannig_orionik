import React from 'react'
import { useState,useEffect } from 'react'

function Hookpr() {
    const[color,setcolor]=useState("Orange")
    const[count,setCount]=useState(0)
    const[photo,setphoto]=useState("photo")
  return (
    <div>
        <h1>this color is {color}</h1>
        <h1>this time is {count}</h1>
      <button onClick={()=>{
        setcolor("Green")
      }}>Green</button>
      <button onClick={()=>{
        setcolor("skyline")
      }}>skyline</button>

      
<button onClick={()=>{
    setCount(count+1)
}}>Increase</button>
<button onClick={()=>{
    setCount(count-1)
}}>Decrease</button>


<div className='img'>
    <button onClick={()=>{
        setphoto(

         <img src="https://cdn.midjourney.com/8365365c-c65a-4ba5-a6c9-2206cd0c9fcd/0_2.png" alt="" /> 
        )
       

    }}>img
    </button>
    {photo}
</div>
    </div>
  )
}

export default Hookpr
