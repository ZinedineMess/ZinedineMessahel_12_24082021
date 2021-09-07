import ApiProvider from '../../services/Api/ApiProvider';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
import ErrorModal from '../ErrorModal/ErrorModal';

class Charts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id : this.props.id,
            welcomeData : null,
            goalScoreData : [],
            goalScorePercentage : 0,
            macroTrackerData : [],
        }
        this.apiProvider = new ApiProvider();
    }

    componentDidMount = () => {
        this.apiProvider
        .getMainData(this.state.id)
        .then((response) => {
            this.setState({
                welcomeData: response.content.firstName,
                goalScoreData: [
                    { name: "completed", value: response.content.userScore, fillColor: "#e60000" },
                    { name: "not-completed", value: 1 - response.content.userScore, fillColor: "transparent" },
                ],
                goalScorePercentage : response.content.userScore * 100,
                macroTrackerData: response.content.macroTracker,
                errorModal: false,
            });
        })
        .catch((error) => {
            this.setState({
                errorModal : true,
                message : error.message,
            })
        })
    }

    render () {
        return this.state.errorModal ? 
        (
            <ErrorModal message={this.state.message} />
        )
        : (
            <section className="charts">
                <Welcome welcomeData={this.state.welcomeData} />
                <DailyActivityBarChart id={this.state.id} />
                {this.getHorizontalSectionCharts()}
                {this.getMacroTrackerSideSection()}
            </section>
        )
    }

    // Build the main Section Charts with UserAverageChart, PerformanceAverageChart and GoalScoreChart
    getHorizontalSectionCharts = () => {
        return (
            <section className="chartsHorizontal">
                <UserAverageLineChart id={this.state.id} />
                <PerformanceAverageRadarChart id={this.state.id} />
                <GoalPieChart 
                    goalScoreData={this.state.goalScoreData} 
                    goalScorePercentage={this.state.goalScorePercentage} 
                />
            </section>
        )
    }

    // Build the side section that contains the MacroTrackers
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

Charts.propTypes = {
    id : PropTypes.string.isRequired,
}

export default Charts;
