import { Route } from 'react-router-dom';
import UserDetail from './Detalle-usuarios';
import UserLink from './Link-usuarios';
import { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchUsers = async (page = 1, users = []) => {
      const response = await fetch(
        `http://localhost:3000/api/users?page=${page}`
      );
      const result = await response.json();

      const newUsers = [...users, ...result.data];

      if (result.data.length === 0) {
        setUsers(newUsers);
      } else {
        fetchUsers(page + 1, newUsers);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.first_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className='content row'>
      <div className='col-6'>
        <h2 className='mt-3'>Usuarios:</h2>
        <input
          type='text'
          placeholder='Buscar...'
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className='list-group shadow-sm p-3 mb-5 bg-body-tertiary rounded'>
          <button
            type='button'
            className='list-group-item list-group-item-action active text-center'
            aria-current='true'
          >
            Listado de usuarios
          </button>
          {filteredUsers.length === 0
            ? 'Cargando...'
            : filteredUsers.map((user) => (
                <UserLink key={user.id} id={user.id} name={user.first_name} />
              ))}
        </div>
      </div>
      <div className='col-6'>
        <h2>Usuario Seleccionado:</h2>
        <Route path='/users/:id' component={UserDetail} />
      </div>
    </section>
  );
}

export default Users;
