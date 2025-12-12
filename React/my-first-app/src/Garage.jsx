import React from 'react';
import Car from './Car';

const Garage = () => {
  const cars = ['BMW', 'Volvo', 'MG'];
  return (
    <div>
      <h2>Car List</h2>
      <ul>
        {cars.map((car) => (
          <Car carName={car} />
        ))}
      </ul>
    </div>
  );
};

export default Garage;
