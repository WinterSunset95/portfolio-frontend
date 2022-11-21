




import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './Components/Nav'
import Chat from './Components/Chat'
import Home from './Pages/Home'
import Til from './Pages/Til'
import Projects from './Pages/Projects'

function App() {
  return (
    <Router>
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/til" element={<Til />} />
				<Route path="/projects" element={<Projects />} />
			</Routes>
			<Chat />
		</Router>
  )
}

export default App
