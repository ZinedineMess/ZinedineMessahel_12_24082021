import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import PropTypes from 'prop-types';
import React, { Component } from "react";

class ChartPie extends Component {
    // Build Pie Chart
    render() {
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
}

ChartPie.propTypes = {
    goalScoreData : PropTypes.array.isRequired,
}

export default ChartPie;
