import Estadisticas from './Content/Estadisticas';
import Usuarios from './Content/Usuarios';
import Categorias from './Content/Categorias';
import News from './Content/News';
import Productos from './Content/Productos';
import { Route, Switch } from 'react-router-dom';

export default function ContentWrap() {
  return (
    <main
      className='content-wrap'
      style={{
        maxHeight: 'calc(100vh - 6rem)',
      }}
    >
      <Switch>
        <Route exact path='/'>
          <p>
            <i className='bi bi-arrow-left'></i>¡Bienvenido/a a E-BEER! Utilice
            el menú de la izquierda para navegar
          </p>
        </Route>
        <Route path='/products'>
          <Productos />
        </Route>
        <Route path='/news'>
          <News />
        </Route>
        <Route path='/stats'>
          <Estadisticas />
        </Route>
        <Route path='/categories'>
          <Categorias />
        </Route>
        <Route path='/users'>
          <Usuarios />
        </Route>
        <Route path='*'>
          <p>¡Error 404! - La página que buscas no existe</p>
        </Route>
      </Switch>
    </main>
  );
}
