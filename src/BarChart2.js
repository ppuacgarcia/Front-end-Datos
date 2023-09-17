import React from 'react';
import { Bar } from 'react-chartjs-2';


const BarChart2 = () => {
  const data = {
    labels: ['A', 'B', 'C', 'D', 'E'],
    datasets: [
      {
        label: 'Datos 1',
        backgroundColor: 'rgba(51, 255, 0, 1)',
        borderColor: 'rgba(0, 0, 0, 1)',
        borderWidth: 1,
        data: [0, 0, 0, 0, 0],
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
      <h2>Gráfica de Barras 2</h2>
      <div style={{ width: '600px', height: '300px' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart2;