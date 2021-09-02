import Charts from '../../components/Charts/Charts';
import './DashBoard.css';
import Header from '../../components/Header/Header';
import React, {Component, Fragment} from 'react';
import SideBar from '../../components/SideBar/SideBar';

class DashBoard extends Component {
    state = {
        userId : 12,
    }

    render() {   
        return (
            <Fragment>
                <Header />
                <main>
                    <SideBar />
                    <Charts userId={this.state.userId}/>
                </main>
            </Fragment>
        )
    }
}

export default DashBoard;
