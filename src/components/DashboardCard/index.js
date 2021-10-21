import react from "react";
import './styles.css'

export default () => {
    return (
        <div className="dashboard--container">
            <div className="dashboard--card">
                <div className="dashboard--title"></div>
                <div className="dashboard--graphic">
                    <div className="dashboard--value"></div>
                </div>
            </div>
        </div>
    )
}