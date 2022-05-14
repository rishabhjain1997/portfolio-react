import Navbar from "./components/shared/Navbar"
import Hero from "./components/Hero"
import AboutMe from "./components/AboutMe"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="min-h-screen">
                <Navbar />
                <Hero />
              </div>
              <div className="min-h-screen">
                <AboutMe />
              </div>
            </>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
