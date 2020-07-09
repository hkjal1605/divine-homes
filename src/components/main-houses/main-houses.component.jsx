import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

import { selectHouse } from '../../redux/house/house.selector';

import './main-houses.styles.scss';

import CustomButton from '../custom-button/custom-button.component';


const MainHouses = ({houseList}) => {
    console.log(houseList);
    return(
    <div className='main-houses'>
        <h3 className='main-houses__heading'>MOST BOUGHT HOUSES</h3>
        <div className='main-houses__content'>
        {
            Object.keys(houseList).slice(0, 3).map(key => (
                <div key={houseList[key].id} className={`main-houses__content--house ${houseList[key].title}`} >
                    <h5 className='main-houses__content--name'>{houseList[key].title}</h5>
                    <p className='main-houses__content--description'>{houseList[key].description}</p>
                </div>
            ))
        }
        </div>
        <Link to='/house' className='link'>
            <CustomButton content='See all houses' />
        </Link>
    </div>
)};

const mapStateToProps = createStructuredSelector({
    houseList: selectHouse
})

export default connect(mapStateToProps)(MainHouses);