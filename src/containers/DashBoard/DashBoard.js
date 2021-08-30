import React, {Component, Fragment} from 'react';
import './DashBoard.css';

import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';

// CHARTS
import Welcome from '../../components/Welcome/Welcome';
import DailyActivityBarChart from '../../components/Charts/DailyActivityBarChart/DailyActivityBarChart';
import UserAverageLineChart from '../../components/Charts/UserAverageLineChart/UserAverageLineChart';
import PerformanceAverageRadarChart from '../../components/Charts/PerformanceAverageRadarChart/PerformanceAverageRadarChart';
import GoalPieChart from '../../components/Charts/GoalPieChart/GoalPieChart';

// DATA
import { USER_MAIN_DATA } from '../../services/mocks/mockedData';
import { USER_ACTIVITY } from '../../services/mocks/mockedData';
import { USER_AVERAGE_SESSIONS } from '../../services/mocks/mockedData';
import { USER_PERFORMANCE } from '../../services/mocks/mockedData';

class DashBoard extends Component {
    render() {   
        return (
            <Fragment>
                <Header />
                <main>
                    <SideBar />
                    <section className="charts">
                        <Welcome name={USER_MAIN_DATA[0].userInfos.firstName}/>
                        <DailyActivityBarChart data={USER_ACTIVITY[0].sessions}/>
                        <section className="chartsHorizontal">
                            <UserAverageLineChart data={USER_AVERAGE_SESSIONS[0]}/>
                            <PerformanceAverageRadarChart data={USER_PERFORMANCE}/>
                            <GoalPieChart data={USER_MAIN_DATA} />
                        </section>
                    </section>
                </main>
            </Fragment>
        )
    }
}

export default DashBoard;
