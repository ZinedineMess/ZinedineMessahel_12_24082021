import Loader from '../../Loader/Loader';
import './MacroTracker.css';
import React, { Component } from "react";

class MacroTracker extends Component {
    state = {
        loading : true,
    }

    componentDidMount() {
        fetch(this.props.data)
        .then(
            this.setState({
                loading: false,
            })
        );
    }

    render() {
        return this.state.loading ?
        (
            <div className="macroTracker">
                <Loader />
            </div>
        )
        : (
            <div className="macroTracker">
                <div className={'macroTrackerContainerImg' + this.props.name} >
                    <img className={'macroTrackerImg' + this.props.name} src={this.props.icon} alt=""/>
                </div>
                <div className="macroTrackerTxt">
                    <p className="macroTrackerQuantity">{this.props.data} {this.props.unitOfMeasure}</p>
                    <p className="macroTrackerType">{this.props.name}</p>
                </div>
            </div>
        )
    }
}

export default MacroTracker;
