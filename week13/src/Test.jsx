import { useState } from "react";
import "./style.css";
function ColorComponent(){
    const [color, setColor] = useState("");
return(

    <>
    <div className={color}>
    <h1>this is {color}</h1>
    <input
    type="text"
    value={color}
    
    onChange={(e) => {
      setColor(e.target.value);
    }}
    placeholder="red"
  />
</div>
</>
)
}
export default ColorComponent;