import logoBeer from '../assets/img/logo.png';
import Sidebar from './Sidebar';

export default function Menu() {
  return (
    <header className='menu-wrap'>
      <figure className='user'>
        <div className='user-avatar'>
          <img src={logoBeer} alt='Logo de Ebeer' />
        </div>
        <figcaption>E-BEER</figcaption>
      </figure>
      <Sidebar />
    </header>
  );
}
