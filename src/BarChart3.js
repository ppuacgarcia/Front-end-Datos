import React from 'react';
import { Bar } from 'react-chartjs-2';


const BarChart3 = () => {
  const data = {
    labels: ['A', 'B', 'C', 'D', 'E'],
    datasets: [
      {
        label: 'Datos 1',
        backgroundColor: 'rgba(123, 0, 255, 1)',
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
      <h2>Gráfica de Barras 3</h2>
      <div style={{ width: '600px', height: '300px' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart3;