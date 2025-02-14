import React from 'react'
import { RouterProvider,createBrowserRouter,createRoutesFromElements,Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'

const App = () => {


const router = createBrowserRouter(createRoutesFromElements(

  <Route path='/' element={<MainLayout/>}>

  </Route>

))

  return <RouterProvider router={router}/>
}

export default App