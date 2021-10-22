import react from "react";
import { getAll } from '../../api'
import './styles.css'

export default () => {
    

    return (
        <div className="dashboard--container">
            <div className="dashboard--card">
                <h4 className="dashboard--title">Sensor de Temperatura</h4>
                <div className="dashboard--graphic">
                    <h5 className="dashboard--value">80</h5>
                </div>
            </div>
        </div>
    )
}