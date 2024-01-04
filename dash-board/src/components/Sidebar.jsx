import { Link } from 'react-router-dom';

export default function Sidebar() {
  const iconStyle = {
    fontSize: '1.5rem',
    color: 'cornflowerblue',
  };

  return (
    <nav>
      <section className='dicover'>
        <h3>Menú principal</h3>
        <ul>
          <li>
            <Link to='/products'>
              <i className='bi bi-box2' style={iconStyle}></i> Productos
            </Link>
          </li>
          <li>
            <a href='/users'>
              <i className='bi bi-people' style={iconStyle}></i> Usuarios
            </a>
          </li>
          <li>
            <Link to='/categories'>
              <i className='bi bi-shop' style={iconStyle}></i> Categorias
            </Link>
          </li>
          <li>
            <a href='/news'>
              <i className='bi bi-newspaper'></i> Novedades
            </a>
          </li>
          <li>
            <a href='/stats'>
              <i className='bi bi-bar-chart-steps'></i> Estadísticas
            </a>
          </li>
        </ul>
      </section>
    </nav>
  );
}
