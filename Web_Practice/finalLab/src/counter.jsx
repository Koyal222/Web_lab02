import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const[count1, setCount1]=useState(0)
    const[count2, setCount2]=useState(0)

  return (
    <>
     <div style={{display: "center"}}>
    Counter1
    <br/>
    <div>
        <button value={count1} onClick={()=>(
        setCount1(count1+1)
    )}>+</button>


    <h1>{count1}</h1>
  
    <button value={count1} onClick={()=>(
       
        setCount1(count1-1)
        

    )}>-</button>
    </div>
    

</div>

Counter2
    <br/>
    <div>
        <span><button value={count2} onClick={()=>(
           
        setCount2(count2+1)
    )}>+</button>

    <h1>{count2}</h1>
    <button value={count1} onClick={()=>(
        setCount2(count2-1)
    )}>-</button>
    </span>

</div>


    </>
  )
}

export default Counter