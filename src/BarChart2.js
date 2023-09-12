import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart2 = () => {
  const data = {
    labels: ['A', 'B', 'C', 'D', 'E'],
    datasets: [
      {
        label: 'Datos 1',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 1,
        data: [65, 59, 80, 81, 56],
      },
    ],
  };

  return (
    <div>
      <h2>Gráfica de Barras 1</h2>
      <Bar data={data} />
    </div>
  );
};

export default BarChart2;
