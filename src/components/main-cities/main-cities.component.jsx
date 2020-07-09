import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

import { selectCity } from '../../redux/city/city.selector';

import './main-cities.styles.scss';

import CustomButton from '../custom-button/custom-button.component';


const MainCities = ({cityList}) => {
    return(
    <div className='main-cities'>
        <h3 className='main-cities__heading'>TOP SEARCHED CITIES</h3>
        <div className='main-cities__content'>
        {
            Object.keys(cityList).slice(0, 3).map(key => (
                <div key={cityList[key].id} className={`main-cities__content--city ${cityList[key].routeName}`} >
                    <h5 className='main-cities__content--name'>{cityList[key].title}</h5>
                    <p className='main-cities__content--description'>{cityList[key].description[0].mainDescription}</p>
                </div>
            ))
        }
        </div>
        <Link to='/city' className='link'>
            <CustomButton content='See all cities' />
        </Link>
    </div>
)};

const mapStateToProps = createStructuredSelector({
    cityList: selectCity
})

export default connect(mapStateToProps)(MainCities);