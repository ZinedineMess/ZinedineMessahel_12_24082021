import {BarChart, Bar, CartesianGrid, Tooltip, ResponsiveContainer, XAxis, YAxis} from 'recharts';
import CustomTooltipDailyActivity from '../CustomTooltip/CustomTooltipDailyActivity/CustomTooltipDailyActivity';
import './DailyActivityBarChart.css';
import Loader from '../../Loader/Loader';
import React, {Component} from 'react';

class DailyActivityBarChart extends Component {
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

    // HEADER CHART 
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

    // CHART 
    getBarChart = () => {
        let kilogramsArray = [];
        let caloriesArray = [];
        let minValueYaxisKg = 0;
        let maxValueYaxisKg = 0;
        let minValueYaxisKcal = 0;
        let maxValueYaxisKcal = 0;

        if (this.state.data) {
            kilogramsArray = this.state.data.map((elt) => elt.kilogram);
            minValueYaxisKg = Math.min(...kilogramsArray) - 1;
            maxValueYaxisKg = Math.max(...kilogramsArray) + 1;

            caloriesArray = this.state.data.map((elt) => elt.calories);
            minValueYaxisKcal = Math.min(...caloriesArray) - 50;
            maxValueYaxisKcal = Math.max(...caloriesArray) + 50;
        }

        return(
            <ResponsiveContainer width="100%" height="90%">
                <BarChart
                    data={this.state.data}
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
                        domain={[minValueYaxisKg, maxValueYaxisKg]}
                    />
                    <YAxis 
                        dataKey="calories" 
                        yAxisId="right" 
                        orientation="right" 
                        stroke="#82ca9d" 
                        hide={true} 
                        domain={[minValueYaxisKcal, maxValueYaxisKcal]}
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

export default DailyActivityBarChart;
