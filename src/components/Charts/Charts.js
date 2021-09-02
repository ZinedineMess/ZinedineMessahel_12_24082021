import ApiProvider from '../../services/Api/ApiProvider';
import React, { Component } from 'react';
// ASSETS 
import calories from '../../assets/macroTracker/calories.png';
import protein from '../../assets/macroTracker/protein.png';
import carbohydrates from '../../assets/macroTracker/carbohydrates.png';
import lipids from '../../assets/macroTracker/lipids.png';
// CHARTS
import Welcome from '../Welcome/Welcome';
import DailyActivityBarChart from './DailyActivityBarChart/DailyActivityBarChart';
import UserAverageLineChart from './UserAverageLineChart/UserAverageLineChart';
import PerformanceAverageRadarChart from './PerformanceAverageRadarChart/PerformanceAverageRadarChart';
import GoalPieChart from './GoalPieChart/GoalPieChart';
import MacroTracker from './MacroTracker/MacroTracker';

// import { USER_ACTIVITY } from '../../services/mocks/mockedData';
// import { USER_AVERAGE_SESSIONS } from '../../services/mocks/mockedData';
// import { USER_MAIN_DATA } from '../../services/mocks/mockedData';
// import { USER_PERFORMANCE } from '../../services/mocks/mockedData';

class Charts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            macroTrackerData : [],
        }
        this.apiProvider = new ApiProvider();
    }

    componentDidMount = () => {
        this.apiProvider
        .getMainData()
        .then((response) => {
            this.setState({
                macroTrackerData: response.content.macroTracker,
            });
        });
    }

    render () {
        // console.log(USER_MAIN_DATA[0].userInfos.firstName);
        return (
            <section className="charts">
                <Welcome />
                <DailyActivityBarChart />
                {this.getHorizontalSectionCharts()}
                {this.getMacroTrackerSideSection()}
            </section>
        )
    }

    getHorizontalSectionCharts = () => {
        return (
            <section className="chartsHorizontal">
                <UserAverageLineChart />
                <PerformanceAverageRadarChart />
                <GoalPieChart />
            </section>
        )
    }

    getMacroTrackerSideSection = () => {
        return (
            <section className="chartsVertical">
                {/* CALORIES */}
                <MacroTracker 
                    data={this.state.macroTrackerData.calorieCount / 1000}
                    icon={calories} 
                    unitOfMeasure="kCal" 
                    name="Calories"
                />
                {/* PROTEIN */}
                <MacroTracker 
                    data={this.state.macroTrackerData.proteinCount}
                    icon={protein} 
                    unitOfMeasure="g" 
                    name="Protéines"
                /> 
                {/* CARBOHYDRATES */}
                <MacroTracker 
                    data={this.state.macroTrackerData.carbohydrateCount}
                    icon={carbohydrates} 
                    unitOfMeasure="g" 
                    name="Glucides"
                />
                {/* LIPIDS */}
                <MacroTracker 
                    data={this.state.macroTrackerData.lipidCount}
                    icon={lipids} 
                    unitOfMeasure="g" 
                    name="Lipides"
                />
            </section>
        )
    }
}

export default Charts;
