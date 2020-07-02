import React from 'react';

import './main-cities.styles.scss';

import CustomButton from '../custom-button/custom-button.component';


const MainCities = () => (
    <div className='main-cities'>
        <h3 className='main-cities__heading'>TOP SEARCHED CITIES</h3>
        <div className='main-cities__content'>
            <div className='main-cities__content--city-1'>
                <h5 className='main-cities__content--name'>OVERLAND PARK</h5>
                <p className='main-cities__content--description'>Overland Park is a city in Kansas with a population of 188,687. Overland Park is in Johnson County and is one of the best places to live in Kansas. Living in Overland Park offers residents a dense suburban feel and most residents own their homes.</p>
            </div>

            <div className='main-cities__content--city-2'>
                <h5 className='main-cities__content--name'>PLANO</h5>
                <p className='main-cities__content--description'>Plano is a city in Texas with a population of 284,579. Plano is in Collin County and is one of the best places to live in Texas. Living in Plano offers residents a dense suburban feel and most residents own their homes.</p>
            </div>

            <div className='main-cities__content--city-3'>
                <h5 className='main-cities__content--name'>ROCHESTER</h5>
                <p className='main-cities__content--description'>Rochester is a city in Minnesota with a population of 113,913. Rochester is in Olmsted County and is one of the best places to live in Minnesota. Beautiful city. People are extremely friendly and eager to help. Lots of jobs available, and lots to do.</p>
            </div>
        </div>
        <CustomButton content='See all cities' />
    </div>
);

export default MainCities;