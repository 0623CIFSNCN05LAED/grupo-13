import { Route, Routes } from 'react-router-dom'

import Home from './components/Home'
import ProductsDashboard from './components/ProductsDashboard'
import UsersDashboard from './components/UsersDashboard'

import './App.css'

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/products" element={<ProductsDashboard />} />
      <Route path="/users" element={<UsersDashboard />} />
      <Route exact path="*" element={<p>404 - página no encontrada</p>} />
    </Routes>
  )
}

export default App
