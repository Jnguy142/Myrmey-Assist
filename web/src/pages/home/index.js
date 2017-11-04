import React, { Component } from 'react';
import Inspector from '../../components/Inspector';
import './style.css';

class HomePage extends Component {
    render() {
        return (
            <div className="columns is-gapless">
                <div className="column">
                    <div className="box">
                        ayy
                            </div>
                </div>
                <div className="column">
                    <Inspector user={this.props.user} screen={this.props.screen} />
                </div>
            </div>
        );
    }
}

export default HomePage;
