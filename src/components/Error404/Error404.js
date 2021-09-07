import error404 from '../../assets/error404/error404.gif';
import './Error404.css';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo/logo.png';
import React, { Component, Fragment } from 'react';

class Error404 extends Component {
    getErrorHeader = () => {
        return (
            <header>
                <img src={logo} alt='error404Logo' className="error404Logo"></img>
            </header>
        )
    }

    getErrorModal = () => {
        return (
            <section className="error404Background">
                <div className="error404Content">
                    <div className="error404Body">
                        <img className='error404Img' src={error404} alt="404..." />
                        <h3>La page que vous recherchez semble introuvable.</h3>
                        <Link to='/' className="error404Link">
                            Retour
                        </Link>
                    </div>
                </div>
            </section>
        )
    }

    render() {
        return (
            <Fragment> 
                {this.getErrorHeader()}
                {this.getErrorModal()}
            </Fragment>
        )
    }
}

export default Error404;
