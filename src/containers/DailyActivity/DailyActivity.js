import ApiProvider from 'services/Api/ApiProvider';
import ChartBar from 'components/Charts/ChartBar/ChartBar';
import 'containers/DailyActivity/DailyActivity.css';
import Loader from 'components/Loader/Loader';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

class DailyActivity extends Component {
    constructor(props) {
        super(props)

        this.state = {
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
        .getUserDailyActivityData(this.props.id)
        .then((response) => {
            this.setState({
                dailyActivityData: response.data,
                mininumYaxisKg : response.mininumYaxisKg,
                maximumYaxisKg : response.maximumYaxisKg,
                minimumYaxisKcal : response.minimumYaxisKcal,
                maximumYaxisKcal : response.maximumYaxisKcal,
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
                <ChartBar 
                dailyActivityData = {this.state.dailyActivityData}
                mininumYaxisKg = {this.state.mininumYaxisKg}
                maximumYaxisKg = {this.state.maximumYaxisKg}
                minimumYaxisKcal = {this.state.minimumYaxisKcal}
                maximumYaxisKcal = {this.state.maximumYaxisKcal}
                />
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
}

DailyActivity.propTypes = {
    id : PropTypes.string.isRequired,
}

export default DailyActivity;
