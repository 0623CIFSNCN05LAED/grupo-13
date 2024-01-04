import React, { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchProducts = async (page = 1, products = []) => {
      const response = await fetch(
        `http://localhost:3000/api/products?page=${page}`
      );
      const result = await response.json();

      const newProducts = [...products, ...result.data.products];

      if (result.data.products.length === 0) {
        setProducts(newProducts);
      } else {
        fetchProducts(page + 1, newProducts);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className='content'>
      <h2>Productos</h2>
      <input
        type='text'
        placeholder='Buscar...'
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table className='table shadow p-3 mb-5 bg-body-tertiary rounded'>
        <thead>
          <tr>
            <th scope='col'>N°</th>
            <th scope='col'>Nombre</th>
            <th scope='col'>Precio</th>
            <th scope='col'>Descripción</th>
            <th scope='col'>Brand</th>
            <th scope='col'>Category</th>
            <th scope='col'>Size</th>
            <th scope='col'>Ver API</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product, index) => (
            <tr key={product.id}>
              <th scope='row'>{index + 1}</th>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>{product.brand}</td>
              <td>{product.category}</td>
              <td>{product.size}</td>
              <td>
                <a href={product.detail}>LINK</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
