import { useState } from "react";

function Counter(){
    const [counter, setCounter]= useState(0);

    return(
        <>
        <h1>You have pressed counter {counter} times</h1>
        <button onClick={()=> setCounter(counter+1)}>Counter
    </button>
        </>
    )


}
export default Counter;