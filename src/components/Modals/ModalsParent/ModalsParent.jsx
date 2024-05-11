
import "./modals-parent.scss";
import close from "../img/backspace.png"

const ModalsParent = ({children, cb}) => {
    
    return (
        <div className="modals__body">
            <div className="modals__content">
                <button onClick={() => cb()} className="modals__close">
                    <img src={close} alt="Close" />
                </button>
                {
                    children
                }
            </div>
        </div>
    )
}

export default ModalsParent