

import "./dashboard-panel-buttons.scss"
const DashboardPanelButtons = ({text, children}) => {

    return (
        <button className="dashboard__panel-buttons">
            {children}
            {text}
        </button>
    )
}

export default DashboardPanelButtons