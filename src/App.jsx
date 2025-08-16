import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar.jsx'
import Home from './pages/Home.jsx'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AddUser from './users/AddUser'
function App() {
  return (
    <>
      <div>
        <Router>
        <Navbar/>
        <Routes> 
          <Route exact path ="/" element = {<Home/>}/>
          <Route exact path = "/AddUser" element =  {<AddUser/>}/>
        </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
