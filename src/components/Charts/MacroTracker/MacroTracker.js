import Loader from '../../Loader/Loader';
import './MacroTracker.css';
import React, { Component } from "react";

class MacroTracker extends Component {
    state = {
        data : this.props.data,
        unitOfMeasure : this.props.unitOfMeasure,
        loader : true,
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
            <div className="macroTracker">
                <Loader />
            </div>
        )
        : (
            <div className="macroTracker">
                <div className={'macroTrackerContainerImg' + this.props.type} >
                    <img className={'macroTrackerImg' + this.props.type} src={this.props.icon} alt=""/>
                </div>
                <div className="macroTrackerTxt">
                    <p className="macroTrackerQuantity">{this.state.data} {this.state.unitOfMeasure}</p>
                    <p className="macroTrackerType">{this.props.type}</p>
                </div>
            </div>
        )
    }
}

export default MacroTracker;
