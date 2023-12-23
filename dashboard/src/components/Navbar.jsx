import { Link } from 'react-router-dom'

import '../css/navbar.css'

export default function Navbar() {
  return (
    <header>
      <div class="header-container">
        <div class="nav-icon">
          <Link to="/home">
            <img src="/images/logo.png" alt="imagen logo" />
          </Link>
        </div>

        <nav class="nav-container">
          <ul>
            <li>
              <Link to="/products">Productos</Link>
            </li>
            <li>
              <Link to="/users">Usuarios</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
