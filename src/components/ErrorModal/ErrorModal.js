import 'components/ErrorModal/ErrorModal.css';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Loader from 'components/Loader/Loader';

class ErrorModal extends Component {
    render() {
        return (
            <section className="errorModalBackground">
                <div className="errorModalContent">
                    <div className="errorModalBody">
                        <h3>Petit problème... Une erreur s'est produite.</h3>
                        <p>{this.props.message}</p>
                        <Loader />
                    </div>
                </div>
            </section>
        )
    }
}

ErrorModal.propTypes = {
    message : PropTypes.string,
}

export default ErrorModal;
