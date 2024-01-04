import React, { useEffect, useState } from 'react';

export default function CategoriasDeProductos() {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchProducts = async (page = 1, categories = {}) => {
      const response = await fetch(
        `http://localhost:3000/api/products?page=${page}`
      );
      const data = await response.json();

      const newCategories = data.data.products.reduce((acc, product) => {
        acc[product.category] = (acc[product.category] || 0) + 1;
        return acc;
      }, categories);

      if (data.data.products.length === 0) {
        setCategories(newCategories);
      } else {
        fetchProducts(page + 1, newCategories);
      }
    };

    fetchProducts();
  }, []);

  const filteredCategories = Object.entries(categories).filter(([category]) =>
    category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className='content'>
      <h2>Categorías</h2>
      <input
        type='text'
        placeholder='Buscar...'
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <article className='person-boxes'>
        {filteredCategories.map(([category, count], index) => (
          <div
            key={index}
            className='person-box shadow p-3 mb-5 bg-body-tertiary rounded'
          >
            <div className='box-avatar'>
              <i className='bi bi-droplet' style={{ fontSize: '100px' }}></i>{' '}
            </div>
            <div className='box-bio'>
              <h2 className='bio-name'>{category}</h2>
              <p>{count} productos</p>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}
