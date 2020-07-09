import React from 'react';
import { connect } from 'react-redux';

import { selectIndividualHouse } from '../../redux/house/house.selector';

import IndividualHouseCard from '../../components/individual-house-card/individual-house-card.component';

import './individual-house-page.styles.scss';


class IndividualHousePage extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    render() {
        const { house, match } = this.props;
        return (
            <div className='individual-house'>
                <h2 className='individual-house__heading'>{match.params.houseId.toUpperCase()}</h2>
                {
                    house.houses.map(house => (
                        <IndividualHouseCard key={house.id} house={house} />
                    ))
                }
            </div>
        )
    }
};

const mapStateToProps = (state, ownProps) => ({
    house: selectIndividualHouse(ownProps.match.params.houseId)(state)
})

export default connect(mapStateToProps)(IndividualHousePage);