import Navbar from "./components/shared/Navbar"
import Hero from "./components/Hero"
import AboutMe from "./components/AboutMe"
function App() {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
      </div>
      <div className="min-h-screen">
        <AboutMe />
      </div>
    </>
  )
}

export default App
