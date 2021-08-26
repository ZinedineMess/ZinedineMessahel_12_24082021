import React, {Component, Fragment} from 'react';
import './DashBoard.css';

import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';

class DashBoard extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <main>
                    <SideBar />
                </main>
            </Fragment>
        )
    }
}

export default DashBoard;
