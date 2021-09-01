import Loader from '../../Loader/Loader';
import './PerformanceAverageRadarChart.css';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer} from 'recharts';
import React, { Component } from "react";

class PerformanceAverageRadarChart extends Component {
    state = {
        data : this.props.data,
        loading : true,
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
            <article className="performanceRadarChart">
                <Loader />
            </article>
        ) 
        : (
            <article className="performanceRadarChart">
                {this.getPerformanceRadarChart()}
            </article>
        )
    }

    getPerformanceRadarChart = () => {
        return (
            <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={this.state.data}>
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
}

export default PerformanceAverageRadarChart;
