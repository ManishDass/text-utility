import TextForm from "./components/TextForm"
import About from "./components/About"
import Navbar from "./components/Navbar"
import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  const [mode, setMode] = useState("dark")

  let switchMode = () => {
    if (mode === "dark") {
      setMode("light")
      document.body.style.backgroundColor = "#212529"
      document.title = "Text Utility - Dark Mode"
    } else {
      setMode("dark")
      document.body.style.backgroundColor = "white"
      document.title = "Text Utility - Light Mode"
    }
  }

  return (
    <Router>
      <Navbar mode={mode} toggleMode={switchMode} />
      <Routes>
        <Route path='/' element={<TextForm mode={mode} />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
