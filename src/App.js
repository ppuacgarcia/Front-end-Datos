import React from 'react';
import './App.css';
import BarChart1 from './BarChart1';
import BarChart2 from './BarChart2';
import BarChart3 from './BarChart3';
import Chart from 'chart.js/auto';
function App() {
  return (
    <div className="App">
      <h3>Gráfica de Barras</h3>
      <div className="charts-container">
        <div className="chart-container">
          <BarChart1 />
        </div>
        <div className="chart-container">
          <BarChart2 />
        </div>
        <div className="chart-container">
          <BarChart3 />
        </div>
      </div>
    </div>
  );
}

export default App;
