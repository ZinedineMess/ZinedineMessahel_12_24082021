import React, {Component} from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo/logo.png';

import MainNavBar from '../MainNavBar/MainNavBar';

class Header extends Component {
    render() {
        return (
            <header>
                <Link to='/'>
                    <img src={logo} alt='logoHeader' className="logoHeader"></img>
                </Link>
                <MainNavBar />
            </header>
        )
    }
}

export default Header;
