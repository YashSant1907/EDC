import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Faculty from './components/Faculty' // Import the Faculty component
import Initiatives from './components/Initiatives'
import Gallery from './components/Gallery'
import Team from './components/Team'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      
      {/* Added Faculty Section here */}
      <Faculty /> 
      
      <Initiatives />
      <Gallery />
      <Team />
      <Footer />
    </div>
  )
}

export default App