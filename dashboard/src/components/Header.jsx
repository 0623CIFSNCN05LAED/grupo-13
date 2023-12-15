import '../css/header.css';

export default function Header() {
  return (
    <header>
      <div class='header-container'>
        <div class='nav-icon'>
          <a href='/home'>
            <img src='/images/logo.png' alt='imagen logo' />
          </a>
        </div>

        <nav class='nav-container'>
          <ul>
            <li>
              <a href='/products'>Productos</a>
            </li>
            <li>
              <a href='/users'>Usuarios</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
