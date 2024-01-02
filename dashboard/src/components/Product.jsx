import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Navbar from './Navbar'

import '../css/detail.css'

export default function Product() {
  const { id } = useParams()
  const [product, setProduct] = useState({})

  useEffect(() => {
    fetch(`http://localhost:3000/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data.dataValues)
      })
  }, [id])

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <section className="detail-container">
          <div>
            <img src={product.image} alt={product.name} />
          </div>
          <div>
            <h2>{product.name}</h2>
            <p>{product.id}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        </section>
      </main>
    </>
  )
}
