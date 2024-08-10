import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/Profile' element={<Profile/>}></Route>
          <Route path='/Signup' element={<Signup/>}></Route>
          <Route path='/Signin' element={<Signin/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
