import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Detail from './pages/Detail'
import BrandPage from './components/BrandPage/BrandPage'
import Cart from './pages/Cart'
import CartContextProvider from './context/CartContext/CartContextProvider'
import Checkout from './pages/Checkout'
import { Toaster } from 'sonner'




function App() {

  return (
    <>
      <CartContextProvider>
        <Toaster richColors expand={true} />
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/detail/:id' element={<Detail />}/>
          <Route path='/brand/:brandName' element={<BrandPage />}/>
          <Route path='/checkout/:orderId' element={<Checkout />}/>
        </Routes>
      </CartContextProvider>
    </>
  )
}

export default App

