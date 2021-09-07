import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import './GoalPieChart.css';
import PropTypes from 'prop-types';
import React, { Component } from "react";

class GoalPieChart extends Component {
    render() {
        return (
            <article className="goalPieChart">
                <h2 className="goalPieChartTitle">Score</h2>
                {this.getPieChart()}
                {this.getPieChartInfos()}
            </article>
        )
    }

    // Build Pie Chart
    getPieChart = () => {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={this.props.goalScoreData}
                        dataKey="value"
                        innerRadius={70}
                        outerRadius={80}
                        startAngle={90}
                        endAngle={450}
                    >
                        {this.props.goalScoreData.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={entry.fillColor}
                                cornerRadius="50%"
                            />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        )
    }

    // Build Pie Chart Infos
    getPieChartInfos = () => {
        return (
            <div className="goalPieChartInfos">
                <span className="goalPieChartScoreValue">{this.props.goalScorePercentage}</span>
                <br />
                de votre
                <br />
                objectif
            </div>
        )
    }
}

GoalPieChart.propTypes = {
    goalScoreData : PropTypes.array.isRequired,
    goalScorePercentage : PropTypes.number.isRequired,
}

export default GoalPieChart;
