import React, { useState } from 'react';
import './App.css';
import BarChart1 from './BarChart1';
import BarChart2 from './BarChart2';
import BarChart3 from './BarChart3';
import Button from './Button';
import Chart from 'chart.js/auto';
function App() {
  const [showCharts, setShowCharts] = useState(true);
  const toggleCharts = () => {
    setShowCharts(!showCharts);
  };

  return (
    <div className="App">
      <h1>Gráfica de Barras</h1>
      {showCharts && (
        <div className="charts-container">
          <div className="chart">
            <BarChart1 />
            <Button /*onClick={toggleCharts}*/ label={showCharts ? 'Ocultar Gráficas' : 'Mostrar Gráficas'} />
          </div>
          <div className="chart">
            <BarChart1 />
            <Button /*onClick={toggleCharts}*/ label={showCharts ? 'Ocultar Gráficas' : 'Mostrar Gráficas'} />
          </div>
          <div className="chart">
            <BarChart1 />
            
            <Button /*onClick={toggleCharts}*/ label={showCharts ? 'Ocultar Gráficas' : 'Mostrar Gráficas'} />
          </div>
        </div>
      )}
      
    </div>
  );
}

export default App;

