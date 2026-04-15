import React from 'react';

const TrailersPage = () => {
  // Mock data for solar-powered trailers
  const trailers = [
    { id: 1, name: 'Solar Trailer A', capacity: '4 people', price: '$100/day' },
    { id: 2, name: 'Solar Trailer B', capacity: '2 people', price: '$80/day' },
    { id: 3, name: 'Solar Trailer C', capacity: '6 people', price: '$120/day' },
  ];

  return (
    <div>
      <h1>Available Solar-Powered Trailers</h1>
      <ul>
        {trailers.map((trailer) => (
          <li key={trailer.id}>
            <h2>{trailer.name}</h2>
            <p>Capacity: {trailer.capacity}</p>
            <p>Price: {trailer.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrailersPage;