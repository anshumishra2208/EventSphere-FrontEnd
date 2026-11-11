import { Route, Routes,useLocation } from "react-router"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { House } from "lucide-react"
import NotFound from "./pages/NotFound"
import HomePage from "./pages/HomePage"
import { useEffect, useState } from "react"

export function GetOnTop(){
  const {pathname} = useLocation()
  useEffect(()=>{
    window.scrollTo({top:0})
  },[pathname])
}


function App() {

  return (
    <div>
      <GetOnTop/>
      <Navbar />
      <Routes>

        <Route path="/" element={<HomePage/>}/>
        <Route path="*" element={<NotFound/>}/>

      </Routes>

      <Footer/>
    </div>

  )
}

export default App
