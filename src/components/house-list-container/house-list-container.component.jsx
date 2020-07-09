import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectHouse } from '../../redux/house/house.selector';

import HouseCard from '../house-card/house-card.component';

import './house-list-container.styles.scss';

const HouseList = ({ houseList }) => (
    <div className='house-container'>
        <h2 className='house-container__heading'>HOUSES TO CHOOSE FROM</h2>
        {
            Object.keys(houseList).map(key => {
                return(
                    <HouseCard key={houseList[key].id} house={houseList[key]} />
                )
            })
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    houseList: selectHouse
});

export default connect(mapStateToProps)(HouseList);