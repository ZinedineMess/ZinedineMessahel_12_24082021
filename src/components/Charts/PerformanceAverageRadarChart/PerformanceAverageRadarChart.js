import ApiProvider from '../../../services/Api/ApiProvider';
import Loader from '../../Loader/Loader';
import './PerformanceAverageRadarChart.css';
import PropTypes from 'prop-types';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer} from 'recharts';
import React, { Component } from "react";

class PerformanceAverageRadarChart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id : this.props.id,
            performanceAverageData : [],
            loading: true,
        }
        this.apiProvider = new ApiProvider();
    }

    componentDidMount = () => {
        this.apiProvider
        .getUserPerformanceData(this.state.id)
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

    // Build Radar Chart
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

PerformanceAverageRadarChart.propTypes = {
    id : PropTypes.string.isRequired,
}

export default PerformanceAverageRadarChart;
