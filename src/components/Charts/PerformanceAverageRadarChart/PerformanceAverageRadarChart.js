import ApiProvider from '../../../services/Api/ApiProvider';
import Loader from '../../Loader/Loader';
import './PerformanceAverageRadarChart.css';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer} from 'recharts';
import React, { Component } from "react";

class PerformanceAverageRadarChart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            performanceAverageData : [],
            loading: true,
        }
        this.apiProvider = new ApiProvider();
    }

    componentDidMount = () => {
        this.apiProvider
        .getUserPerformanceData()
        .then((response) => {
            this.setState({
                loading: false,
                performanceAverageData: response.content,
            });
        });
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
                    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={this.state.performanceAverageData}>
                        <PolarGrid radialLines={false} />
                        <PolarAngleAxis 
                            dataKey="subject" 
                            stroke="white"
                            tickLine={false}
                            tick={{
                                fontSize: 10,
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
