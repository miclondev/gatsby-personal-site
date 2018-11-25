import React, { Component } from 'react';

import HomeTitle from './home/HomeTitle';
import ProfileImage from './home/ProfileImage';
import MenuBar from './MenuBar';
import HomeDesc from './home/HomeDesc';

class Home extends Component {
    render() {
        return (
            <div className="main">
                <div className="headerMain">
                    <MenuBar />
                </div>
                <div className="bodyMain">
                    <div className="bodyMain__title">
                        <ProfileImage />
                        <HomeTitle />
                    </div>
                    <HomeDesc />

                    <div className="bodyMain__projects">
                        projects
                    </div>

                </div>
            </div>
        )
    }
}

export default Home;