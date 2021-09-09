import ChartPie from '../../components/Charts/ChartPie/ChartPie';
import './GoalScore.css';
import PropTypes from 'prop-types';
import React, { Component } from "react";

class GoalScore extends Component {
    render() {
        return (
            <article className="goalPieChart">
                <h2 className="goalPieChartTitle">Score</h2>
                <ChartPie goalScoreData={this.props.goalScoreData} />
                {this.getPieChartInfos()}
            </article>
        )
    }

    // Build Pie Chart Infos
    getPieChartInfos = () => {
        return (
            <div className="goalPieChartInfos">
                <span className="goalPieChartScoreValue">{this.props.goalScorePercentage}%</span>
                <br />
                de votre
                <br />
                objectif
            </div>
        )
    }
}

GoalScore.propTypes = {
    goalScoreData : PropTypes.array.isRequired,
    goalScorePercentage : PropTypes.number.isRequired,
}

export default GoalScore;
