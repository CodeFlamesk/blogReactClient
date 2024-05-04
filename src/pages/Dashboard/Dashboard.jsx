
import DashboardItemAddPodcast from "./DashboardItems/DashboardItemAddPodcast/DashboardItemAddPodcast";
import DashboardPanel from "./DashboardPanel/DashboardPanel";

import "./dashboard.scss"

const Dashboard = () => {
    
    return (
        <div className="dashboard">
            <DashboardPanel/>
            <div className="dashboard__right">
                <DashboardItemAddPodcast/>
            </div>
        </div>

    )
}

export default Dashboard