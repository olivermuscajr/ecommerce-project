import { Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage'
import './App.css'

function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='checkout' element={<CheckoutPage />} />
    </Routes>
    /* 
    <Routes>
    <Route path='/' element={<HomePage />}></Route>
    <Route path='/' element={<HomePage />}></Route>
    </Routes> */

  )
}

export default App
