import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);
  const [nameType, setNameType] = useState("Acha");



  return (
    <>
    <div className="list">
      <input type="text" 
      value={name}
      onChange={(e)=>{
          setName(e.target.value)
      }} />
      {JSON.stringify(name)}
      <select
      value={nameType}
      onChange={(e)=>{
        setNameType(e.target.value)
      }}>
        <option value="Acha">Acha</option>
        <option value="Bura">Bura</option>
        <option value="Neutral">Neutral</option>

      </select>
      {/* {JSON.stringify(name)} */}
      <button onClick={()=>{
          setNames((prev) => [...prev, {name: name , type: nameType}])
      }} >Add</button>
      
      <div>
        
        {names.map((item) => (
          <li>
            {item.name} ({item.type})
          </li>
        ))}
      </div>

    </div>

     </>
  )
}

export default App
