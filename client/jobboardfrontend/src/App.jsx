import './App.css'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/navbar'

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default App
