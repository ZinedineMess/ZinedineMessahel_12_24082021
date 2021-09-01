import './Welcome.css';
import React, {Component} from 'react';

class Welcome extends Component {
    render() {
        return (
            <section className="welcome">
                <h1>Bonjour <span className="welcomeTxtColored">{this.props.name}</span></h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </section>
        )
    }
}

export default Welcome;
