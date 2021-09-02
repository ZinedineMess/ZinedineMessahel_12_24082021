import error404 from '../../assets/error404/error404.gif';
import './Error404.css';
import React, { Component, Fragment } from 'react';

class Error404 extends Component {
    render() {
        return (
            <Fragment> 
                <section className="error404">
                    <img className='error404Img' src={error404} alt="404..." />
                </section>
            </Fragment>
        )
    }
}

export default Error404;
