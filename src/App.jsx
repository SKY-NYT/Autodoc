import React from 'react'
import { RouterProvider,createBrowserRouter,createRoutesFromElements,Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import AboutUsPage from './pages/AboutUsPage'
import ContactUsPage from './pages/ContactUsPage'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {


const router = createBrowserRouter(createRoutesFromElements(

  <Route path='/' element={<MainLayout/>}>
    <Route index element={<HomePage/>}/>
    <Route path='/services' element={<ServicesPage/>}/>
    <Route path='/about_us' element={<AboutUsPage/>}/>
    <Route path='contact_us' element={<ContactUsPage/>}/>
    <Route path='*' element={<NotFoundPage/>}/>


  </Route>

))

  return <RouterProvider router={router}/>
}

export default App