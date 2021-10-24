import react, { useEffect } from "react"
import './styles.css'

export default ({ name, value, type }) => {
    const calcPercent = () => {
        let percent = (440 - (440 * value) / 100)
        return percent
    }

    const selectColor = () => {
        let color = ''
        switch (type) {
            case 'umidade':
                if (value > 90 || value < 60) {

                    color = '#f2a654'
                } else {
                    color = '#03A9F4'
                }
                break;
            case 'temperatura':
                if (value > 30 || value < 10) {
                    color = '#f2a654'
                } else {
                    color = '#03A9F4'
                }
                break;
            default:
                color = '#03A9F4'
                break;
        }
        return color
    }

    return (
        <div className="box" >
            <h4 className="dashboard--title">{name}</h4>
            <div className="percent">
                <svg >
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle style={{
                        strokeDashoffset: calcPercent(),
                        stroke: selectColor()
                    }} cx="70" cy="70" r="70"></circle>
                </svg>
                <div className="number">
                    <h2>{value}<span>{type === 'umidade' ? ' %' : '°C'}</span></h2>
                </div>
            </div>
            <h2 className="text"></h2>
        </div>
    )
}
