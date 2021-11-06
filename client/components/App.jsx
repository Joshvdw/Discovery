import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Planets from './Planets'
import Planet from './Planet'


const App = () => {

  return (
    <Routes>
      <Route exact path="/" element={<Planets />} />
      <Route exact path=":name" element={<Planet />} />
    </Routes>
  )}

export default App
