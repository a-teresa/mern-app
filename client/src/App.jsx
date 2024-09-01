import React from 'react'
import Footer from "./components/layout/Footer"
import Navbar from './components/layout/Navbar'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from './pages/Home'

const App = () => {
  return (
    <Router>
         <div className="flex flex-col justify-between min-h-screen ">
      <Navbar/>
      <Home/>
    </div>
     <Footer/>
    </Router>
 
  )
}

export default App
