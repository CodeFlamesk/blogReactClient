

import "./switch.scss"

const Switch = () => {
    return (
        <div className="main-into__switch switch">
            <div className="switch__body">
                <button className="switch__item _active">Whitepapers</button>
                <button className="switch__item">Ebooks</button>
                <button className="switch__item">Reports</button>
            </div>
        </div>
    )
}

export default Switch