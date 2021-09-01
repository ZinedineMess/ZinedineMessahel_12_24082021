import React, { Component } from 'react'
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
// DATA FORMAT
import {getWelcomeData} from '../../services/data/welcomeData';
import {getDailyActivityDataFormat} from '../../services/data/dailyActivityData';
import {getUserAverageDataFormat} from '../../services/data/userAverageData';
import {getPerformanceAverageDataFormat} from '../../services/data/performanceAverageData';
import {getGoalScoreDataFormat} from '../../services/data/goalScoreData'; 
import {getCaloriesData, getProteinsData, getCarbohydratesData, getLipidsData} from '../../services/data/macroTrackerData';

class Charts extends Component {
    render () {
        return (
            <section className="charts">
                <Welcome name={getWelcomeData()}/>
                <DailyActivityBarChart data={getDailyActivityDataFormat()}/>
                {this.getHorizontalSectionCharts()}
                {this.getMacroTrackerSideSection()}
            </section>
        )
    }

    getHorizontalSectionCharts = () => {
        return (
            <section className="chartsHorizontal">
                <UserAverageLineChart data={getUserAverageDataFormat()}/>
                <PerformanceAverageRadarChart data={getPerformanceAverageDataFormat()}/>
                <GoalPieChart data={getGoalScoreDataFormat()} />
            </section>
        )
    }

    getMacroTrackerSideSection = () => {
        return (
            <section className="chartsVertical">
                {/* CALORIES */}
                <MacroTracker 
                    data={getCaloriesData() / 1000} 
                    icon={calories} 
                    unitOfMeasure="kCal" 
                    type="Calories"
                />
                {/* PROTEIN */}
                <MacroTracker 
                    data={getProteinsData()} 
                    icon={protein} 
                    unitOfMeasure="g" 
                    type="Protéines"
                /> 
                {/* CARBOHYDRATES */}
                <MacroTracker 
                    data={getCarbohydratesData()} 
                    icon={carbohydrates} 
                    unitOfMeasure="g" 
                    type="Glucides"
                />
                {/* LIPIDS */}
                <MacroTracker 
                    data={getLipidsData()} 
                    icon={lipids} 
                    unitOfMeasure="g" 
                    type="Lipides"
                />
            </section>
        )
    }
}

export default Charts;
