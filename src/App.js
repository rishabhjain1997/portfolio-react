import Navbar from "./components/shared/Navbar"
import Hero from "./components/Hero"
function App() {
  return (
    <div className="min-h-screen" id="fullpage">
      <div className="section">
        <Navbar />
        <Hero />
      </div>
      <div className="section">Hi</div>
    </div>
  )
}

export default App
