import ButtonAdmin from "components/Buttons/ButtonAdmin/ButtonAdmin"
import { useDispatch } from "react-redux"
import { changeClient } from "store/DashboardReducer";

import "./dashboard-panel.scss"
import logo from "./img/logo-mobile.webp"
import DashboardPanelButtons from "./DashboardPanelButtons/DashboardPanelButtons";
import DashboardIcon from "./Icons/DashboardIcon";


const DashboardPanel = () => {

    const dispatch = useDispatch();

    return (
        <div className="dashboard__panel">
            <div className="dashboard__top">
                <img width={126} height={35} alt="Logo" src={logo}/>
                <ButtonAdmin cb={() => dispatch(changeClient())}/>
            </div>
            <div className="dashboard__buttons">
                <DashboardPanelButtons text={"Dashboard"}>
                    <DashboardIcon/>
                </DashboardPanelButtons>
            </div>
        </div>
    )
}

export default DashboardPanel