import { Route, Routes } from "react-router"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { House } from "lucide-react"
import NotFound from "./pages/NotFound"
import HomePage from "./pages/HomePage"




function App() {

  return (
    <div>
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
