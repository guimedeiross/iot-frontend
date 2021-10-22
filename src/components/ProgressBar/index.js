import react from "react"
import './styles.css'

export default () => {
    return (
        <div className="box">
            <div className="percent">
                <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <div className="number">
                    <h2>50<span>%</span></h2>
                </div>
            </div>
            <h2 className="text"></h2>
        </div>
    )
}
