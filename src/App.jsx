import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Home } from './components/sections/Home'
import { About } from './components/sections/About'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />

    </>
  )
}

export default App
