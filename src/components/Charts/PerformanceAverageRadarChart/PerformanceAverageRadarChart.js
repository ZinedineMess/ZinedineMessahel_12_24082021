import React, { Component } from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer} from 'recharts';
import './PerformanceAverageRadarChart.css';

class PerformanceAverageRadarChart extends Component {
    state = {
        data : this.props.data[0],
    }

    getPerformanceAverageData = () => {
        let performanceAverageData = [];

        this.state.data.data.map((data, index) => {
            return performanceAverageData.push({
                subject:
                    this.state.data.kind[index + 1].charAt(0).toUpperCase() +
                    this.state.data.kind[index + 1].slice(1),
                value: data.value,
            })
        })
        return performanceAverageData;
    }

    getPerformanceRadarChart = () => {
        return (
            <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={this.getPerformanceAverageData()}>
                        <PolarGrid radialLines={false} />
                        <PolarAngleAxis 
                            dataKey="subject" 
                            stroke="white"
                            tickLine={false}
                            tick={{
                                fontSize: 12,
                                fontWeight: 500,
                            }} 
                        />
                        <Radar dataKey="value" 
                            fill="#ff0101"
                            fillOpacity={0.7}
                            stroke="transparent" 
                        />
                    </RadarChart>
                </ResponsiveContainer>
        )
    }

    render() {
        return (
            <article className="performanceRadarChart">
                {this.getPerformanceRadarChart()}
            </article>
        )
    }
}

export default PerformanceAverageRadarChart;
