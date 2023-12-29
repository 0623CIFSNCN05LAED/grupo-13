import { useState, useEffect } from 'react'

import Navbar from './Navbar'
import Spinner from './Spinner'

import '../css/dashboards.css'

export default function ProductsDashboard() {
  const [products, setProducts] = useState([])
  const [productsCount, setProductsCount] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedBrand, setSelectedBrand] = useState('')
  const [uniqueBrands, setUniqueBrands] = useState(new Set())
  const [selectedSize, setSelectedSize] = useState('')
  const [uniqueSizes, setUniqueSizes] = useState(new Set()) // Almacena las medidas únicas
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:3000/api/products/')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products)
        setProductsCount(data.count)
        const sizes = new Set(data.products.map((product) => product.size))
        setUniqueSizes(sizes)
        const brands = new Set(data.products.map((product) => product.brand))
        setUniqueBrands(brands)
        setLoading(false)
      })
  }, [])
  console.log(products)

  const filteredProducts = products.filter((product) => {
    // Selects
    const brandFilter = selectedBrand === '' || product.brand === selectedBrand
    const sizeFilter = selectedSize === '' || product.size === selectedSize
    // Searchbar
    const idFilter =
      searchTerm === '' ||
      product.id.toString().includes(searchTerm.toLowerCase())
    const nameFilter =
      searchTerm === '' ||
      product.name.toLowerCase().includes(searchTerm.toLowerCase())

    return brandFilter && sizeFilter && (idFilter || nameFilter)
  })

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <h2>Administración de productos</h2>

        {loading ? (
          <Spinner />
        ) : (
          <section className="table-container">
            <div className="head-table-container">
              <article className="searchbar">
                <form action="/" method="POST">
                  <input
                    type="text"
                    name="search"
                    placeholder="Buscar producto"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </form>
              </article>

              <article className="pl-container-selects">
                <form className="pl-form-brand">
                  <select
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                  >
                    <option value="">Marca</option>
                    {[...uniqueBrands].map((brand) => (
                      <option key={brand} value={brand}>
                        {brand}
                      </option>
                    ))}
                  </select>
                </form>

                <form className="pl-form-size">
                  <select
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                  >
                    <option value="">Medida</option>
                    {[...uniqueSizes].map((size) => (
                      <option key={size} value={size}>
                        {size} ml
                      </option>
                    ))}
                  </select>
                </form>
              </article>
            </div>

            <article>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Marca</th>
                    <th>Categoria</th>
                    <th>Medida</th>
                    <th>Precio</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {filteredProducts.map((product) => (
                    <tr key={product.id}>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>{product.category}</td>
                      <td>{product.size}</td>
                      <td>${product.price}</td>

                      <td>
                        <a href={`/products/${product.id}`}>
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
                <span> {productsCount}</span>
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
