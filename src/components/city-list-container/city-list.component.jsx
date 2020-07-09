import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCity } from '../../redux/city/city.selector';

import CityCard from '../city-card/city-card.component';

import './city-list-container.styles.scss';

const CityList = ({ cityList }) => (
    <div className='city-container'>
        <h2 className='city-container__heading'>CITIES WHERE WE SERVE</h2>
        {
            Object.keys(cityList).map(key => {
                return(
                    <CityCard key={cityList[key].id} city={cityList[key]} />
                )
            })
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    cityList: selectCity
});

export default connect(mapStateToProps)(CityList);