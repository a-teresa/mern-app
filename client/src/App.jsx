import React from 'react'
import Footer from "./components/layout/Footer"
import Navbar from './components/layout/Navbar'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from './pages/Home'
import ProductScreen from './pages/ProductScreen'

const App = () => {
  return (
    <Router>
         <div className="flex flex-col justify-between min-h-screen ">
      <Navbar/>
      <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<ProductScreen/>}/>
      </Routes>
      </main>
    </div>
     <Footer/>
    </Router>
 
  )
}

export default App
