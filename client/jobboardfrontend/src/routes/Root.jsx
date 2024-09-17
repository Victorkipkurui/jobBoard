import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'

const Root= createBrowserRouter([
  {
    path:'/',
    element: <App></App>,
    children: [
      {path: '/',
        element: <Home></Home>
      }
    ]
  }
])

export default Root