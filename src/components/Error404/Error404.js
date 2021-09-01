import error404 from '../../assets/error404/error404.gif';
import './Error404.css';
import logo from '../../assets/logo/logo.png';
import React, { Component, Fragment } from 'react';

class Error404 extends Component {
    render() {
        return (
            <Fragment> 
                <header>
                    <img className='logo' src={logo} alt="logo" />
                </header>
                <section className="error404">
                    <img className='error404Img' src={error404} alt="404..." />
                </section>
            </Fragment>
        )
    }
}

export default Error404;
