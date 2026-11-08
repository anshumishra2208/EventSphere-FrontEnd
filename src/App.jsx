import { Route, Routes } from "react-router"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { House } from "lucide-react"
import NotFound from "./pages/NotFound"




function App() {

  return (
    <div>
      <House/>
      <Navbar />
      <Routes>

        <Route path="/" element={<h1>Home</h1>}/>
        <Route path="*" element={<NotFound/>}/>

      </Routes>

      <Footer/>
    </div>

  )
}

export default App
