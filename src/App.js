import React, { useState } from 'react';
import './App.css';
import BarChart from './BarChart';
import ComboBox from './ComboBox';
import Chart from 'chart.js/auto';// no quitar esto de chart.js/auto porque sirve para  lo de category

function App() {
  const [dynamoData, setDynamoData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Datos 1',
        backgroundColor: 'rgba(255, 72, 0, 1)',
        borderColor: 'rgba(0, 0, 0, 1)',
        borderWidth: 1,
        data: [],
      },
    ],
  });

  const [dynamoOptions, setDynamoOptions] = useState({
    scales: {
      x: {
        type: 'category',
        labels: [],
      },
      y: {
        beginAtZero: true,
      },
    },
  });

  const onDynamo = async () => {
    try {
      if (!selectedValue) {
        console.error('Ninguna opción seleccionada');
        return;
      }
      
      // Aquí deberías obtener los datos de tu API
      const response = await fetch(`http://localhost:4000/api/dynamo/${selectedValue.value}`);
      const data = await response.json();
      
      const labels = Object.keys(data);
      const values = Object.values(data);

      // Actualiza dynamoData y dynamoOptions con los nuevos datos
      setDynamoData({
        labels: labels,
        datasets: [
          {
            label: 'Datos 1',
            backgroundColor: 'rgba(255, 72, 0, 1)',
            borderColor: 'rgba(0, 0, 0, 1)',
            borderWidth: 1,
            data: values,
          },
        ],
      });
      
      setDynamoOptions({
        scales: {
          x: {
            type: 'category',
            labels: labels,
          },
          y: {
            beginAtZero: true,
          },
        },
      });

    } catch (error) {
      console.error('Error:', error);
    }
  };

// Barras Mysql

  const [MysqlData, setMysqlData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Datos 1',
        backgroundColor: 'rgba(255, 72, 0, 1)',
        borderColor: 'rgba(0, 0, 0, 1)',
        borderWidth: 1,
        data: [],
      },
    ],
  });

  const [MysqlOptions, setMysqlOptions] = useState({
    scales: {
      x: {
        type: 'category',
        labels: [],
      },
      y: {
        beginAtZero: true,
      },
    },
  });

  const onMysql = async () => {
    try {
      if (!selectedValue) {
        console.error('Ninguna opción seleccionada');
        return;
      }
      
      // Aquí deberías obtener los datos de tu API
      const response = await fetch(`http://localhost:4000/api/mysql/${selectedValue.value}`);
      const data = await response.json();
      
      const labels = Object.keys(data);
      const values = Object.values(data);

      // Actualiza dynamoData y dynamoOptions con los nuevos datos
      setMysqlData({
        labels: labels,
        datasets: [
          {
            label: 'Datos 1',
            backgroundColor: 'rgba(255, 72, 0, 1)',
            borderColor: 'rgba(0, 0, 0, 1)',
            borderWidth: 1,
            data: values,
          },
        ],
      });
      
      setMysqlOptions({
        scales: {
          x: {
            type: 'category',
            labels: labels,
          },
          y: {
            beginAtZero: true,
          },
        },
      });

    } catch (error) {
      console.error('Error:', error);
    }
  };




  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <div className="App">
      <h1>Gráfica de Barras</h1>
      <ComboBox onChange={(selected) => setSelectedValue(selected)} />
      <button onClick={onDynamo}>Dynamo</button>
      <button onClick={onMysql}>Mysql</button>
      <BarChart data={dynamoData} options={dynamoOptions} />
      <BarChart data={MysqlData} options={MysqlOptions} />
    </div>
  );
}

export default App;




