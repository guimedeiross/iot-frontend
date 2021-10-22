import react, { useState, useEffect } from 'react'
import { getAll } from './api'
import './App.css';
import DashboardCard from './components/DashboardCard';

function App() {

  /* const [sensors, setSensors] = useState([]) */

  return (
    <div className="page">
      <DashboardCard />
      <DashboardCard />
    </div>
  )
}

export default App;
