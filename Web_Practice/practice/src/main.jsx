import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import FetchData from './FetchData.jsx'
import TodoList from './Todo.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <FetchData/>
  </React.StrictMode>,
)
