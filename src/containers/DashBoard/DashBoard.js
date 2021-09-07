import Charts from '../../components/Charts/Charts';
import './DashBoard.css';
import Header from '../../components/Header/Header';
import PropTypes from 'prop-types';
import React, {Component, Fragment} from 'react';
import SideBar from '../../components/SideBar/SideBar';

class DashBoard extends Component {
    state = {
        id : this.props.id,
    }
    render() {   
        return (
            <Fragment>
                <Header />
                <main>
                    <SideBar />
                    <Charts id={this.state.id} />
                </main>
            </Fragment>
        )
    }
}

DashBoard.propTypes = {
    id : PropTypes.string.isRequired,
}

export default DashBoard;
