import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Detail from './pages/Detail'
import BrandPage from './components/BrandPage/BrandPage'



function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/detail/:id' element={<Detail />}/>
        <Route path='/brand/:brandName' element={<BrandPage />}/>
      </Routes>
      
    </>
  )
}

export default App

