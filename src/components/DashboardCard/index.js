import react from "react";
import ProgressBar from '../ProgressBar'
import './styles.css'

export default ({ name, value, type }) => {


    return (
        <div className="dashboard--container" >
            <ProgressBar name={name} value={value} type={type} />
        </div>
    )
}