import React from 'react';

import MainContent from '../../components/main/main.component';
import Features from '../../components/features/features.component';
import HomeGallery from '../../components/home-gallery/home-gallery.component';
import TopRealtors from '../../components/top-realtors/top-realtors.component';
import CustomerReviews from '../../components/customer-reviews/customer-reviews.components';
import MainCities from '../../components/main-cities/main-cities.component';

import './home-page.styles.scss';

class HomePage extends React.Component {
    constructor() {
        super();

        this.state = {
            realtors: [],
            users: []
        }
    }

    componentDidMount() {
        fetch('https://randomuser.me/api/?results=3&seed=realtor')
            .then(response => response.json())
            .then(user => this.setState({ realtors: user.results}));

        fetch('https://randomuser.me/api/?results=10&seed=customers')
            .then(response => response.json())
            .then(user => this.setState({ users: user.results}));

    }

    render() {
        return (
            <div className='home-page'>
                <MainContent currentUser={ this.props.currentUser } />
                <Features />
                <MainCities />
                <HomeGallery />
                <TopRealtors realtors={this.state.realtors}/>
                <CustomerReviews customers={this.state.users} />
            </div>
        )
    }
};

export default HomePage;