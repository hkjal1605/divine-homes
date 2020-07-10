import React from 'react';
import { connect } from 'react-redux';

import { selectIndividualCity } from '../../redux/city/city.selector';
import { selectHouseForPreview } from '../../redux/house/house.selector';

import IndividualHouseCard from '../../components/individual-house-card/individual-house-card.component';

import './individual-city-page.styles.scss';

import NavigationButton from '../../components/navigation/navigaton.component';

const IndividualCityPage = ({ city, houseList }) => {
    console.log(city);
    houseList.map(house => house.houses.map(indhouse => {
        if(indhouse.city === city.title) {
            console.log(indhouse)
        }
    }))
    return(
        <div className='individual-city'>
            <NavigationButton />
            <div className='individual-city-main'>
                <div className='individual-city-main__content'>
                    <h4 className='individual-city-main__content--heading'>{city.title}</h4>
                    <p className='individual-city-main__content--description'>{city.description[0].completeDescription}</p>
                    
                </div>
                <img src={city.description[0].img1} alt='city' className='individual-city-main__img--image-large' />
                <img src={city.description[0].img1} alt='city' className='individual-city-main__img--image-small' />
            </div>

            <div className='individual-city-features'>
                <img src={city.description[0].img2} alt='city' className='individual-city-features__img--image-large' />
                <img src={city.description[0].img2} alt='city' className='individual-city-features__img--image-small' />
                <div className='individual-city-features__content'>
                    <h5 className='individual-city-features__content--text'>{`Features Of ${city.title}`}</h5>
                    <span className='individual-city-features__content--points'>{`Median Sales Price: ${city.description[0].medianSalesPrice}`}</span>
                    <span className='individual-city-features__content--points'>{`Population: ${city.description[0].population}`}</span>
                    <span className='individual-city-features__content--points'>{`Median Household Income: ${city.description[0].medianHouseholdIncome}`}</span>
                    <span className='individual-city-features__content--points'>{`Median Rent Per Month: ${city.description[0].medianRentPerMonth}`}</span>
                    <span className='individual-city-features__content--points'>{`One Year Job Growth Rate: ${city.description[0].oneYearJobGrowthRate}`}</span>
                    <span className='individual-city-features__content--points'>{`Seven Year Equity Growth Rate: ${city.description[0].sevenYearEquityGrowthRate}`}</span>
                    <span className='individual-city-features__content--points'>{`Eight Year Population Growth: ${city.description[0].eightYearPopulationGrowth}`}</span>
                    <span className='individual-city-features__content--points'>{`Unemployment Rate: ${city.description[0].unemploymentRate}`}</span>
                </div>
            </div>

            <div className='individual-city-gallery'>
                <img src={city.description[0].img6} alt='city' className='individual-city-gallery__img' />
                <img src={city.description[0].img7} alt='city' className='individual-city-gallery__img' />
                <img src={city.description[0].img8} alt='city' className='individual-city-gallery__img' />
            </div>

            <div className='individual-city-advantages'>
                <h5 className='individual-city-advantages__title'>{`Advantages of investing in ${city.title}`}</h5>
        
                <img src={city.description[0].img3} alt='city' className='individual-city-advantages__img1' />
                <p className='individual-city-advantages__text1'><span className='individual-city-advantages__heading'>Affordabilty:</span>{city.description[0].affordability}</p>    
               
               
                <img src={city.description[0].img4} alt='city' className='individual-city-advantages__img2' />
                <p className='individual-city-advantages__text2'><span className='individual-city-advantages__heading'>Job Growth:</span>{city.description[0].jobGrowth}</p>    
               
               
                <img src={city.description[0].img5} alt='city' className='individual-city-advantages__img3' />
                <p className='individual-city-advantages__text3'><span className='individual-city-advantages__heading'>Population Growth:</span>{city.description[0].populationGrowth}</p>    
               
            </div>

            <div className='individual-city-houses'>
                <h5 className='individual-city-houses__heading'>{`Houses In ${city.title}`}</h5>
                {
                    houseList.map(house => house.houses.map(indhouse => {
                        if(indhouse.city === city.title) {
                            return <IndividualHouseCard key={indhouse.id} house={indhouse} />
                        }
                    }))
                }
            </div>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => ({
    city: selectIndividualCity(ownProps.match.params.cityId)(state),
    houseList: selectHouseForPreview(state)
})

export default connect(mapStateToProps)(IndividualCityPage);
