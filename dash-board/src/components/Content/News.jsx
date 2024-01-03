import React, { useEffect, useState } from 'react';

export default function News() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchItems = async (url, setItems, page = 1, items = []) => {
      const response = await fetch(`${url}?page=${page}`);
      const data = await response.json();

      const newItems = url.includes('products')
        ? [...items, ...data.data.products]
        : [...items, ...data.data];

      if (
        (url.includes('products') ? data.data.products : data.data).length === 0
      ) {
        setItems(newItems.slice(-5));
      } else {
        fetchItems(url, setItems, page + 1, newItems);
      }
    };

    fetchItems('http://localhost:3000/api/products', setProducts);
    fetchItems('http://localhost:3000/api/users', setUsers);
  }, []);

  return (
    <section className='content'>
      <div className='row'>
        <div className='col'>
          <h2>Últimos 5 productos</h2>
          <ul className='list-group'>
            {products.map((product, index) => (
              <li key={product.id} className='list-group-item'>
                {product.name}
              </li>
            ))}
          </ul>
        </div>
        <div className='col'>
          <h2>Últimos 5 usuarios</h2>
          <ul className='list-group'>
            {users.map((user, index) => (
              <li key={user.id} className='list-group-item'>
                {user.first_name} {user.last_name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
