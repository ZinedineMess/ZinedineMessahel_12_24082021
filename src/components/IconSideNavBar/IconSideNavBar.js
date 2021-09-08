import {Link} from 'react-router-dom';
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

class IconSideNavBar extends Component {
    render() {
        return (
            <Fragment>
                <Link to='/'>
                    <img src={this.props.logo} alt="iconSideNavBar" className="iconSideNavBar"></img>
                </Link>
            </Fragment>
        )
    }
}

IconSideNavBar.propTypes = {
    logo : PropTypes.string.isRequired,
}

export default IconSideNavBar;
