import React from 'react';
import './house-page.styles.scss';
import { connect } from 'react-redux';

import { Route } from 'react-router-dom';

import { fetchHouseListStartAsync } from '../../redux/house/house.actions';

import HouseListContainer from '../../components/house-list-container/house-list-container.container';
import IndividualHousePageContainer from '../individual-house-page/individual-house-page.container';

class HousePage extends React.Component {

    componentDidMount() {
        const { fetchHouseListStartAsync } = this.props;
        fetchHouseListStartAsync();
    }

    render() {
        const { match } = this.props;
        return(
            <div className='house-page'>
                <Route exact path = {`${match.path}`} 
                component={HouseListContainer}
                />

                <Route path={`${match.path}/:houseId`} component={IndividualHousePageContainer} />
            </div>
        )
    }
};

  
  const mapDispatchToProps = dispatch => ({
    fetchHouseListStartAsync: () => dispatch(fetchHouseListStartAsync())
})


export default connect(null, mapDispatchToProps)(HousePage);