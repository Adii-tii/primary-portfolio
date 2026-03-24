import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ProjectDetail from './components/ProjectDetail'
import Footer from './components/Footer'
import Certificates from './components/Certificates'
import Hobbies from './components/Hobbies'

import Intro from './components/Intro'

import WhatIBring from './components/WhatIBring'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#FFFFEB] text-[#1E1E1E] selection:bg-[#1E1E1E] selection:text-[#FFFFEB] transition-colors duration-300 flex flex-col">
        <Navbar />
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={
              <>
                <Home />
                <Intro />
                <Projects />
                <TechStack />
                <Contact />
              </>
            } />
            <Route path="/about" element={
              <div className="min-h-screen bg-bg-primary">
                <About />
              </div>
            } />
            <Route path="/contact" element={
              <div className="min-h-screen bg-bg-primary">
                <Contact />
              </div>
            } />
            <Route path="/projects/:id" element={<ProjectDetail />} />
          </Routes>
        </main>
        
        <div className="mx-auto w-full px-2 pb-2">
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
