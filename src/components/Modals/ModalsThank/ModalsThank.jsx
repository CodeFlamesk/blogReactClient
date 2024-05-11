import Title24 from "components/Title24/Title24"

import "./modals-thank-body.scss"

import { useSelector } from "react-redux"
import RightButton from "components/RightButton/RightButton"

const ModalsThank = () => {

    const {text, mainTitle} = useSelector(store => store.modals)
    

    return (
        <div className="modals-thank-body">
            <Title24 text={mainTitle}/> 
            <p>{text}</p>
            <RightButton text={"Забыли пароль ? "} />
        </div>
    )
}

export default ModalsThank