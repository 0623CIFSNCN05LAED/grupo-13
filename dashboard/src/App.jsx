import { Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import ProductsDashboard from './components/ProductsDashboard'
import UsersDashboard from './components/UsersDashboard'

import './App.css'

function App() {
  return (
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/products">
        <ProductsDashboard />
      </Route>
      <Route path="/users">
        <UsersDashboard />
      </Route>
      <Route path="*">
        <p>404 - página no encontrada</p>
      </Route>
    </Switch>
  )
}

export default App
