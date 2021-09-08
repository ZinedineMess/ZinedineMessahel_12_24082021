import ApiProvider from '../../../services/Api/ApiProvider';
import {BarChart, Bar, CartesianGrid, Tooltip, ResponsiveContainer, XAxis, YAxis} from 'recharts';
import CustomTooltipDailyActivity from '../CustomTooltip/CustomTooltipDailyActivity/CustomTooltipDailyActivity';
import './DailyActivityBarChart.css';
import Loader from '../../Loader/Loader';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

class DailyActivityBarChart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id : this.props.id,
            dailyActivityData : [],
            mininumYaxisKg : 0,
            maximumYaxisKg : 0,
            minimumYaxisKcal : 0,
            maximumYaxisKcal : 0,
            loading: true,
        }
        this.apiProvider = new ApiProvider();
    }

    componentDidMount = () => {
        this.apiProvider
        .getUserDailyActivityData(this.state.id)
        .then((response) => {
            this.setState({
                dailyActivityData: response.content,
                mininumYaxisKg : Math.min(...response.content.map((elt) => elt.kilogram)) - 1,
                maximumYaxisKg : Math.max(...response.content.map((elt) => elt.kilogram)) + 2,
                minimumYaxisKcal : Math.min(...response.content.map((elt) => elt.calories)) - 50,
                maximumYaxisKcal : Math.max(...response.content.map((elt) => elt.calories)) + 50,
                loading: false,
            });
        });
    }

    render() {
        return this.state.loading ? 
        (
            <section className="barChart">
                <Loader />
            </section>
        )
        : (
            <section className="barChart">
                {this.getHeaderBarChart()}
                {this.getBarChart()}
            </section>
        )
    }

    // Build Header Bar Chart
    getHeaderBarChart = () => {
        return (
            <header className="barChartHeader">
                <h2>Activité quotidienne</h2>
                <div className="barChartLegend">
                    <div className="header-elt">
                        <i className="fas fa-circle black"></i>
                        <span >Poids (kg)</span>
                    </div>
                    <div className="header-elt">
                        <i className="fas fa-circle red"></i>
                        <span>Calories brûlées (kCal)</span>
                    </div>
                </div>
            </header>
        )
    }

    // Build Bar Chart
    getBarChart = () => {
        return(
            <ResponsiveContainer width="100%" height="90%">
                <BarChart
                    data={this.state.dailyActivityData}
                    margin={{
                    top: 50,
                    right: 10,
                    left: 40,
                    bottom: 5,
                    }}
                    barCategoryGap={35}
                    barGap={8}
                >
                    <CartesianGrid 
                        strokeDasharray="3 3" 
                        vertical={false} 
                    />
                    <XAxis 
                        dataKey="day"
                        tickLine={false}
                        tick={{ fontSize: 14 }}
                        dy={15} 
                        
                    />
                    <YAxis 
                        dataKey="kilogram" 
                        yAxisId="left" 
                        orientation="right" 
                        stroke="#8884d8" 
                        interval="number"
                        allowDecimals={false}
                        tickLine={false}
                        axisLine={false}
                        tick={{ fontSize: 14, fill: '#74798c'}}
                        tickCount={8}
                        domain={[this.state.mininumYaxisKg, this.state.maximumYaxisKg]}
                    />
                    <YAxis 
                        dataKey="calories" 
                        yAxisId="right" 
                        orientation="right" 
                        stroke="#82ca9d" 
                        hide={true} 
                        domain={[this.state.minimumYaxisKcal, this.state.maximumYaxisKcal]}
                    />
                    <Tooltip content={<CustomTooltipDailyActivity />} cursor={{ fill: "#e0e0e0" }} />
                    <Bar 
                        yAxisId="left" 
                        dataKey="kilogram" 
                        fill="#000"
                        radius={[50, 50, 0, 0]} 
                    />
                    <Bar 
                        yAxisId="right" 
                        dataKey="calories" 
                        fill="#e60000"
                        radius={[50, 50, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        )
    }
}

DailyActivityBarChart.propTypes = {
    id : PropTypes.string.isRequired,
}

export default DailyActivityBarChart;
