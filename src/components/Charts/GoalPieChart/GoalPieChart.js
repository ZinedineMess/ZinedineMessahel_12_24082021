import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import './GoalPieChart.css';
import Loader from '../../Loader/Loader';
import React, { Component } from "react";

class GoalPieChart extends Component {
    state = {
        data : this.props.data,
        loading: true,
    }

    componentDidMount() {
        fetch(this.props.data)
        .then(
            this.setState({ loading: false })
        )
    }

    render() {
        return this.state.loading ? 
        (
            <article className="goalPieChart">
                <Loader />
            </article>
        )
        : (
            <article className="goalPieChart">
                <h2 className="goalPieChartTitle">Score</h2>
                {this.getPieChart()}
                {this.getPieChartInfos()}
            </article>
        )
    }

    getPieChart = () => {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={this.state.data}
                        dataKey="value"
                        innerRadius={70}
                        outerRadius={80}
                        startAngle={90}
                        endAngle={450}
                    >
                        {this.state.data.map((entry, index) => (
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
                <span className="goalPieChartScoreValue">{`${100 * this.state.data[0].value}%`}</span>
                <br />
                de votre
                <br />
                objectif
            </div>
        )
    }
}

export default GoalPieChart;
