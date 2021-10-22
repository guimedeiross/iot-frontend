import react from "react";
import ProgressBar from '../ProgressBar'
import './styles.css'

export default () => {


    return (
        <div className="dashboard--container">
            <h4 className="dashboard--title">Sensor de Temperatura</h4>
            <ProgressBar />
        </div>
    )
}