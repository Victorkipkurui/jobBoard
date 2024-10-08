import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Jobs from './pages/Jobs.jsx';
import About from './pages/About.jsx';
import Insights from './pages/Insights.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[{
      path: '/',
      element: <Home></Home>
    },{
      path: '/about',
      element: <About></About>
    },{
      path: '/jobs',
      element: <Jobs></Jobs>
    },{
      path: '/insights',
      element: <Insights></Insights>
    },{
      path: '/login',
      element: <Login></Login>
    },{
      path: '/signup',
      element: <Signup></Signup>
    }
  ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
