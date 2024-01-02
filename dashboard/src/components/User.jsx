import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Navbar from './Navbar'

import '../css/detail.css'

export default function User() {
  const { id } = useParams()

  const [user, setUser] = useState({})

  useEffect(() => {
    fetch(`http://localhost:3000/api/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data.data)
      })
  }, [id])

  console.log(user)

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <section className="detail-container">
          <div>
            <img src={user.image} alt={user.first_name} />
          </div>
          <div>
            <h2>
              {user.first_name} {user.last_name}
            </h2>
            <p>{user.id}</p>
            <p>{user.email}</p>
          </div>
        </section>
      </main>
    </>
  )
}
