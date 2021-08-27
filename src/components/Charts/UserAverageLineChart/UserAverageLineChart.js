import React, { Component } from "react";
import {Line, LineChart, Tooltip, XAxis, YAxis, ResponsiveContainer} from "recharts";
import './UserAverageLineChart.css';

// CUSTOM TOOLTIP
import CustomTooltipSessionsAverage from "../CustomTooltip/CustomTooltipSessionsAverage/CustomTooltipSessionsAverage";

class UserAverageLineChart extends Component {
    state = {
        data : this.props.data,
    }

    // HEADER CHART 
    getHeaderLineChart = () => {
        return (
            <header>
                <h2 className="sessionsLineChartTitle">
                    Durée moyenne des
                        <br />
                    sessions
                </h2>
            </header>
        )
    }

    // CHART 
    getLineChart = () => {
        return (
            <div className="lineChart">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={200}
                        data={this.state.data.sessions}
                        syncId="anyId"
                        outerRadius="75%"
                        margin={{ top: 0, right: 12, bottom: 24, left: 12 }}
                    >
                        <XAxis 
                            dataKey="day" 
                            stroke="rgba(255, 255, 255, 0.6)"
                            axisLine={false}
                            dy={10}
                            tickLine={false}
                            tick={{
                                fill : 'white',
                                fontSize: 12,
                                fontWeight: 500,
                            }}
                        />
                        <YAxis 
                            dataKey="sessionLength"
                            domain={[0, "dataMax + 60"]}
                            hide={true}
                        />
                        <Tooltip 
                            content={<CustomTooltipSessionsAverage />}
                            cursor={{
                                stroke: "rgba(0, 0, 0, 0.1)",
                                strokeWidth: 32,
                            }}
                        />
                        <Line 
                            dataKey="sessionLength" 
                            type={`${this.state.data.userId === "12" ? "step" : "monotone"}`}
                            stroke="rgba(255, 255, 255, 0.6)"
                            strokeWidth={2}
                            dot={false}
                            activeDot={{
                            stroke: "rgba(255,255,255, 0.6)",
                            strokeWidth: 10,
                            r: 5,
                            }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        )
    }

    render() {
        return (
            <article className="sessionsLineChart">
                {this.getHeaderLineChart()}
                {this.getLineChart()}
            </article>
        )
    }
}

export default UserAverageLineChart;
