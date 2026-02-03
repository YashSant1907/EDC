import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Initiatives from './components/Initiatives'
import Gallery from './components/Gallery'
import Faculty from './components/Faculty'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Initiatives />
      <Gallery />
      <Faculty />
      <Footer />
    </div>
  )
}

export default App
