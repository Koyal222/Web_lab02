import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FillArea from './FillArea'
import Counter from './counter'
import FillFooter from './fillFooter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <FillArea bgcolor="#ffcccc" width={900} height={150} headerText="Sample Fill Area 1" />
       <Counter/>
       <FillFooter/>
      </div>
    </>
  )
}

export default App
