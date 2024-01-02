import { useState, useEffect } from 'react'

import Navbar from './Navbar'
import Spinner from './Spinner'

import '../css/dashboards.css'

export default function ProductsDashboard() {
  const [users, setUsers] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:3000/api/users/')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users)
        setLoading(false)
      })
    console.log(users)
  }, [])

  const filteredUsers = users.filter((user) => {
    const idFilter =
      searchTerm === '' || user.id.toString().includes(searchTerm.toLowerCase())
    const nameFilter =
      searchTerm === '' ||
      user.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.last_name.toLowerCase().includes(searchTerm.toLowerCase())

    return idFilter || nameFilter
  })

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <h2>Administración de usuarios</h2>

        {loading ? (
          <Spinner />
        ) : (
          <section className="table-container">
            <div className="head-table-container">
              <article className="searchbar">
                <form>
                  <input
                    type="text"
                    name="search"
                    placeholder="Buscar usuario"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </form>
              </article>
            </div>

            <article>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Email</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {filteredUsers.map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.first_name}</td>
                      <td>{user.last_name}</td>
                      <td>{user.email}</td>

                      <td>
                        <a href={`/users/${user.id}`}>
                          <button className="btn-view">
                            <i className="fa-solid fa-eye"></i>
                          </button>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </article>

            <article className="pagination-container">
              <div className="rows-per-page-container">
                <label htmlFor="rowsPerPage">Filas por página: </label>
                <select name="rowsPerPage" id="rowsPerPage">
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                </select>
              </div>

              <div className="pagination-counter-container">
                <span>1 - 5 </span>
                de
                <span> 1</span>
              </div>

              <div className="pagination-btns-container">
                <button>
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </article>
          </section>
        )}
      </main>
    </>
  )
}
