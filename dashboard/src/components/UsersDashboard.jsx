import { useState, useEffect } from 'react';
import '../css/users-dashboard.css';

export default function UsersDashboard() {
  const [users, setUsers] = useState([]);
  const [usersCount, setUsersCount] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3000/api/users/')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users);
        setUsersCount(data.count);
      });
  }, []);

  return (
    <>
      <main>
        <h2>Administración de usuarios</h2>

        <section>
          <div className='head-table-container'>
            <section className='pl-filters'>
              <article className='searchbar'>
                <form action='/' method='POST'>
                  <input
                    type='text'
                    name='search'
                    placeholder='Buscar usuario'
                  />
                </form>
              </article>

              <article className='pl-container-selects'>
                <form action='/marca' method='POST' className='pl-form-brand'>
                  <select>
                    <option>Tipo de acceso</option>
                    <option value='1'>Admin</option>
                    <option value='2'>User</option>
                  </select>
                </form>

                {/* <button className="btn-add">
                  <a href="/users/create">Agregar</a>
                  <i className="fa-solid fa-plus"></i>
                </button> */}
              </article>
            </section>
          </div>

          <section className='table-container'>
            <article>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Email</th>
                    <th>Acceso</th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.category}</td>
                      <td>{user.size}</td>
                      <td>${user.price}</td>

                      <td>
                        <a href={`/users/${user.id}`}>
                          <button class='btn-view'>
                            <i class='fa-solid fa-eye'></i>
                          </button>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </article>

            <article className='pagination-container'>
              <div className='rows-per-page-container'>
                <label for='rowsPerPage'>usuarios por página: </label>
                <select name='rowsPerPage' id='rowsPerPage'>
                  <option value='5'>5</option>
                  <option value='10'>10</option>
                  <option value='15'>15</option>
                </select>
              </div>

              <div className='pagination-counter-container'>
                <span>1 - 5 </span>
                de
                <span> {usersCount}</span>
              </div>

              <div className='pagination-btns-container'>
                <button>
                  <i className='fa-solid fa-arrow-left'></i>
                </button>
                <button>
                  <i className='fa-solid fa-arrow-right'></i>
                </button>
              </div>
            </article>
          </section>
        </section>
      </main>
    </>
  );
}
