import 'components/SideBar/SideBar.css';
import SideBarNav from 'components/SideBarNav/SideBarNav';
import React, {Component} from 'react';

class SideBar extends Component {
    render() {
        return (
            <section className="sideBar">
                <SideBarNav />
                <div className="copyright">
                    <h3>Copyright, SportSee 2021</h3>
                </div>
            </section>
        )
    }
}

export default SideBar;
