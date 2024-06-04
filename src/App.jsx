import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import Nav from "./components/Nav/Nav"
import Footer from "./components/Footer/Footer"
import { Privacy } from "./components/Privacy/Privacy"
import { Home } from "./components/Home/Home"
import { LoginForm } from "./components/LoginForm/LoginForm"
import { Contact } from "./components/Contact/Contact"
import { Signup } from "./components/Signup/Signup"

function App() {  
  
  return (
   <div>
    <Nav/> 
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/privacy" element={<Privacy/>}></Route>
      <Route path="/login" element={<LoginForm/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
    </Routes>   
    <Footer/>
   </div>    
  )
}

export default App


