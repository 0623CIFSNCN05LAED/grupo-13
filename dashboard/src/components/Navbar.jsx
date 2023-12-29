import { Link } from 'react-router-dom'

import '../css/navbar.css'

export default function Navbar() {
  return (
    <header>
      <div className="header-container">
        <div className="nav-icon">
          <Link to="/">
            <img src="/images/logo.png" alt="imagen logo" />
          </Link>
        </div>

        <nav className="nav-container">
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
