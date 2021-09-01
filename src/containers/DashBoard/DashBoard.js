import Charts from '../../components/Charts/Charts';
import './DashBoard.css';
import Header from '../../components/Header/Header';
import React, {Component, Fragment} from 'react';
import SideBar from '../../components/SideBar/SideBar';

class DashBoard extends Component {
    render() {   
        return (
            <Fragment>
                <Header />
                <main>
                    <SideBar />
                    <Charts />
                </main>
            </Fragment>
        )
    }
}

export default DashBoard;
