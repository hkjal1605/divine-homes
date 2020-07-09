import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MainContent from '../../components/main/main.component';
import Features from '../../components/features/features.component';
import HomeGallery from '../../components/home-gallery/home-gallery.component';
import TopRealtors from '../../components/top-realtors/top-realtors.component';
import CustomerReviews from '../../components/customer-reviews/customer-reviews.components';
import MainCities from '../../components/main-cities/main-cities.component';
import MainHouses from '../../components/main-houses/main-houses.component';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { fetchCityListStartAsync } from '../../redux/city/city.actions';
import { selectIsCityListLoaded } from '../../redux/city/city.selector';
import { selectIsHouseListLoaded } from '../../redux/house/house.selector';

import './home-page.styles.scss';
import { fetchHouseListStartAsync } from '../../redux/house/house.actions';

const MainCitiesWithSpinner = WithSpinner(MainCities);
const MainHousesWithSpinner = WithSpinner(MainHouses);

class HomePage extends React.Component {
    constructor() {
        super();

        this.state = {
            realtors: [],
            users: []
        }
    }

    componentDidMount() {
        const { fetchCityListStartAsync, fetchHouseListStartAsync} = this.props;
        fetchCityListStartAsync();
        fetchHouseListStartAsync();

        fetch('https://randomuser.me/api/?results=3&seed=realtor')
            .then(response => response.json())
            .then(user => this.setState({ realtors: user.results}));

        fetch('https://randomuser.me/api/?results=10&seed=customers')
            .then(response => response.json())
            .then(user => this.setState({ users: user.results}));

    }

    render() {
        const { isCityListLoaded, isHouseListLoaded } = this.props;
        return (
            <div className='home-page'>
                <MainContent />
                <Features />
                <MainCitiesWithSpinner isLoading={!isCityListLoaded} />
                <MainHousesWithSpinner isLoading={!isHouseListLoaded} />
                <HomeGallery />
                <TopRealtors realtors={this.state.realtors}/>
                <CustomerReviews customers={this.state.users} />
            </div>
        )
    }
};

const mapStateToProps = createStructuredSelector({
    isCityListLoaded: selectIsCityListLoaded,
    isHouseListLoaded: selectIsHouseListLoaded
})

const mapDispatchToProps = dispatch => ({
    fetchCityListStartAsync: () => dispatch(fetchCityListStartAsync()),
    fetchHouseListStartAsync: () => dispatch(fetchHouseListStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);