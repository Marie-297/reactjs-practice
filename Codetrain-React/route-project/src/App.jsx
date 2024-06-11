import React from 'react'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Layout from './Components/Layout'
import Shop from './Pages/Shop'
import Err from './Pages/Err'
import Details from './Pages/Details'

function App() {

  const routes = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/shop/:id' element={<Details />} />
      <Route path='*' element={<Err />} />
    </Route>
  ))
  return (
    <RouterProvider router={routes} />
  )
}

export default App
