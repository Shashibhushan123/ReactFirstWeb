import { useState } from 'react'
import {BrowserRouter,Route, Routes} from 'react-router-dom'

import './App.css'
import Layout from './components/Layout/Layout'
import { Menu, About, Contact, Home, PageNotFound } from './pages/index.jsx'


function App() {
 
  return (
   <>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/menu' element={<Menu/>}/>
              <Route path='*' element={<PageNotFound/>}/>

            
          </Routes>
      </BrowserRouter>  
    
   </>
  )
}

export default App
