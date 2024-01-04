import React, { useEffect, useState } from 'react';
import SmallCard from './SmallCard';

export default function Statistics() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch('http://localhost:3000/api/products').then((res) => res.json()),
      fetch('http://localhost:3000/api/users').then((res) => res.json()),
    ]).then(([productsData, usersData]) => {
      setStats([
        {
          id: 1,
          title: 'Total de productos',
          value: productsData.total.count,
          color: 'cornflowerblue',
          icon: 'bi bi-box2',
        },
        {
          id: 2,
          title: 'Total de usuarios',
          value: usersData.total.count,
          color: 'orange',
          icon: 'bi bi-people',
        },
        {
          id: 3,
          title: 'Total de categorías',
          value: productsData.total.countByCategory,
          color: 'green',
          icon: 'bi bi-shop',
        },
      ]);
    });
  }, []);

  return (
    <section className='content'>
      <h2 className='mt-3'>Estadísticas</h2>
      <div className='info-boxes'>
        {stats.map((stat) => (
          <SmallCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            color={stat.color}
          />
        ))}
      </div>
    </section>
  );
}
