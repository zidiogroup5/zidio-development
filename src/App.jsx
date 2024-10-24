import React from 'react'   // rfce -> to create basic react template
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'   // keeps track of diff routes we use
import Header from './components/Header'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Services from './components/pages/Services'
import Contact from './components/pages/Contact'
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App