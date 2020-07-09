import React from 'react';
import { connect } from 'react-redux';

import { Route } from 'react-router-dom';

import CityListContainer from '../../components/city-list-container/city-list.container';

import { fetchCityListStartAsync } from '../../redux/city/city.actions';
import { fetchHouseListStartAsync } from '../../redux/house/house.actions';
 
import IndividualCityPageContainer from '../individual-city-page/individual-city-page.container';

import './city-page.styles.scss';

class CityPage extends React.Component {

    componentDidMount() {
        const { fetchCityListStartAsync, fetchHouseListStartAsync } = this.props;
        fetchCityListStartAsync();
        fetchHouseListStartAsync();
    }

    render() {
        const { match } = this.props;
        return(
            <div className='city-page'>
                <Route exact path = {`${match.path}`} 
                component={CityListContainer}
                />

                <Route path={`${match.path}/:cityId`} component={IndividualCityPageContainer} />
            </div>
        )
    }
};

  
  const mapDispatchToProps = dispatch => ({
    fetchCityListStartAsync: () => dispatch(fetchCityListStartAsync()),
    fetchHouseListStartAsync: () => dispatch(fetchHouseListStartAsync())
})


export default connect(null, mapDispatchToProps)(CityPage);