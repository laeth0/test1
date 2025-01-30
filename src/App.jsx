import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './components/Navbar'
import Startbootstrap from './components/Startbootstrap'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Startbootstrap/>
      <Portfolio/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
