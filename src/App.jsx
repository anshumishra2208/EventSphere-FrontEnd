import { Route, Routes, useLocation } from "react-router"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { House } from "lucide-react"
import NotFound from "./pages/NotFound"
import HomePage from "./pages/HomePage"
import { useEffect, useState } from "react"
import EventDetailsPage from "./pages/EventDetails"
import { Toaster } from "sonner"

export function GetOnTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [pathname])
}


function App() {

  return (
    <div>
      <GetOnTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events/:slug" element={<EventDetailsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster
        richColors
        toastOptions={{
          style: {
            borderRadius: "1rem",
            border: "1px solid #EBE8DF",
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontSize: "13px",
          },
        }}
      />

      <Footer/>
    </div>

  )
}

export default App
