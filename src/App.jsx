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

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme) {
        return savedTheme
      }
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark'
      }
    }
    return 'light'
  })

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <Router>
      <div className="min-h-screen bg-bg-primary text-text-primary selection:bg-accent/30 selection:text-accent transition-colors duration-300 flex flex-col">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={
              <>
                <Home />
                <Intro />
                <Projects />
                <TechStack />
                <Certificates />
                <Hobbies />
                <Contact />
              </>
            } />
            <Route path="/about" element={
              <div className="pt-24 min-h-screen bg-bg-primary">
                <About />
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
