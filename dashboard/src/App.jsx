import { Route, Routes } from 'react-router-dom'

import Home from './components/Home'
import ProductsDashboard from './components/ProductsDashboard'
import Product from './components/Product'
import UsersDashboard from './components/UsersDashboard'

import './App.css'
import User from './components/User'

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />

      <Route path="/products" element={<ProductsDashboard />} />
      <Route path="/products/:id" element={<Product />} />

      <Route path="/users" element={<UsersDashboard />} />
      <Route path="/users/:id" element={<User />} />

      <Route exact path="*" element={<p>404 - página no encontrada</p>} />
    </Routes>
  )
}

export default App
