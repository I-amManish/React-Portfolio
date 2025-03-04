
import './App.css'
import { Navbar } from './components/Navbar'
import About from './pages/About'
import Footer from './pages/Footer'
import Hero from './pages/Hero'
import Portfolio from './pages/Portfolio'
import Stack from './pages/Stack'


function App() {
  

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Portfolio/>
      <Stack/>
      <Footer/>
    </>
  )
}

export default App
