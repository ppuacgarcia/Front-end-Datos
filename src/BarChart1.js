import React from 'react';
import { Bar } from 'react-chartjs-2';


const BarChart1 = () => {
  const data = {
    labels: ['A', 'B', 'C', 'D', 'E'],
    datasets: [
      {
        label: 'Datos 1',
        backgroundColor: 'rgba(75, 192, 192, 1)',
        borderColor: 'rgba(0, 0, 0, 1)',
        borderWidth: 1,
        data: [65, 59, 80, 81, 56],
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'category', // Establece el tipo de escala en 'category'
        labels: ['A', 'B', 'C', 'D', 'E'], // Las etiquetas de las categorías
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Gráfica de Barras 1</h2>
      <div style={{ width: '400px', height: '300px' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart1;


