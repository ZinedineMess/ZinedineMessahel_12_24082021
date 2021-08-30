import React, { Component } from "react";
import './GoalPieChart.css';
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

class GoalPieChart extends Component {
    state = {
        data : this.props.data[0],
        score : this.props.data[0].todayScore,
    }

    getPieChart = () => {
        const goalPieChartData = [
            { name: "completed", value: this.state.score, fillColor: "#e60000" },
            { name: "not-completed", value: 1 - this.state.score, fillColor: "transparent" },
        ];

        return (
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={goalPieChartData}
                        dataKey="value"
                        innerRadius={70}
                        outerRadius={80}
                        startAngle={90}
                        endAngle={450}
                    >
                        {goalPieChartData.map((entry, index) => (
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

    getPieChartInfos = () => {
        return (
            <div className="goalPieChartInfos">
                <span className="goalPieChartScoreValue">{`${100 * this.state.score}%`}</span>
                <br />
                de votre
                <br />
                objectif
            </div>
        )
    }

    render() {
        return (
                <article className="goalPieChart">
                    <h2 className="goalPieChartTitle">Score</h2>
                    {this.getPieChart()}
                    {this.getPieChartInfos()}
                </article>
        )
    }
}

export default GoalPieChart;
