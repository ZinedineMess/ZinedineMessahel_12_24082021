import ApiProvider from '../../services/Api/ApiProvider';
import './Welcome.css';
import React, {Component} from 'react';

class Welcome extends Component {
    constructor(props) {
        super(props)

        this.state = {
            welcomeData : [],
            loading: true,
        }
        this.apiProvider = new ApiProvider();
    }

    componentDidMount() {
        this.apiProvider
        .getMainData()
        .then((response) => {
            this.setState({
                welcomeData: response.content.firstName,
            });
        });
    }

    render() {
        return (
            <section className="welcome">
                <h1>Bonjour <span className="welcomeTxtColored">{this.state.welcomeData}</span></h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </section>
        )
    }
}

export default Welcome;
