import PropTypes from 'prop-types';
import React, {Component} from 'react';
import 'components/Welcome/Welcome.css';

class Welcome extends Component {
    render() {
        return (
            <section className="welcome">
                <h1>Bonjour <span className="welcomeTxtColored">{this.props.welcomeData}</span></h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </section>
        )
    }
}

Welcome.propTypes = {
    welcomeData : PropTypes.string,
}

export default Welcome;
