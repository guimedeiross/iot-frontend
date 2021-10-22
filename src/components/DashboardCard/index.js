import react, { useState } from "react";
import { getAll } from '../../api'
import './styles.css'

export default () => {
    const [sensors, setSensors] = useState([])

    return (
        <div className="dashboard--container">
            <div className="dashboard--card">
                <h4 className="dashboard--title"></h4>
                <div className="dashboard--graphic">
                    <div className="dashboard--value"></div>
                </div>
            </div>
        </div>
    )
}