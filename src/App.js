import react, { useState, useEffect } from 'react'
import { getAll } from './api'
import './App.css';
import DashboardCard from './components/DashboardCard';

export default () => {

  const [sensors, setSensors] = useState([])
  const [visible, setVisible] = useState(false)

  const getSensors = async () => {
    let allSensors = await getAll()
    return allSensors
  }

  const isVisible = () => {
    let timer
    if(window.innerHeight <= 850) {
      setVisible(true)
      timer = setTimeout(() => setVisible(false), 5000)
    } else {
      setVisible(false)
    }
    
    return () => {
      clearTimeout(timer);
    }
  }

  useEffect(() => {
    (async () => {
      setSensors(await getSensors())
      setInterval(async () => setSensors(await getSensors()), 20000)
    })()
  }, [])

  useEffect(() => {
    isVisible()
  }, [])

  return (
    <div className="page">
      {sensors && sensors.map((sensor, key) => (
        <DashboardCard key={key}
          name={sensor.name_sensor}
          value={sensor.value_sensor}
          type={sensor.type_sensor} />
      ))}
      <div className="arrowDown" style={{
        display: visible ? 'block' : 'none',
        backgroundImage: "url(assets/setaDown.png)"
      }}></div>
    </div>

  )
}