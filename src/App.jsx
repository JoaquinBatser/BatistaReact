import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home'
import Detail from './pages/Detail'
import BrandPage from './components/BrandPage/BrandPage'
import Cart from './pages/Cart'
import CartContextProvider from './context/CartContext/CartContextProvider'
import { Toaster } from 'sonner'
import CartForm from './components/Cart/CartForm'




function App() {

  return (
    <div className='bg-black min-h-screen'>
      <CartContextProvider>
        <Toaster richColors expand={true} className='toast'/>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/cartform' element={<CartForm />}/>
          <Route path='/detail/:id' element={<Detail />}/>
          <Route path='/brand/:brandName' element={<BrandPage />}/>
        </Routes>
      </CartContextProvider>
    </div>
  )
}

export default App

