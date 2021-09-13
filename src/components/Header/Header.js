import 'components/Header/Header.css';
import {Link} from 'react-router-dom';
import logo from 'assets/logo/logo.png';
import MainNavBar from 'components/MainNavBar/MainNavBar';
import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <Link to='/'>
                    <img src={logo} alt='logoHeader' className="logoHeader"></img>
                </Link>
                <MainNavBar />
            </header>
        )
    }
}

export default Header;
