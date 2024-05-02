import "./right-button.scss";


const RightButton = ({text}) => {
    return (
        
            <button className="button-arrow button">
                <span className="button-arrow__text">{text}</span>
                <span className="button-arrow__image">
                    <i className="fa-solid fa-arrow-up"></i>
                </span>
                <span className="fill-container"></span>
            </button>
       
    )
}

export default RightButton