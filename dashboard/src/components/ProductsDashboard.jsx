import { useState, useEffect } from 'react';

export default function ProductsDashboard() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data.data));
  }, []);

  return (
    <div>
      <h1>productsDashboard</h1>
    </div>
  );
}
