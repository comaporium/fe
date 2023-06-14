import React from 'react'
import Home from './Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Detail from './Detail'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Detail/:id' element={<Detail />} />
        </Routes>
      </Router>
    </>
  )
}

export default App