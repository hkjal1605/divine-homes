import React from 'react';

import './realtors-page.styles.scss';

import RealtorCard from '../../components/realtor-card/realtor-card.component';

class RealtorsPage extends React.Component {
    constructor() {
        super();

        this.state = {
            realtors: []
        }
    }

    componentDidMount() {
        fetch('https://randomuser.me/api/?results=30&seed=xyzabc')
            .then(response => response.json())
            .then(user => this.setState({ realtors: user.results}));
    }

    render() {
        const { realtors } = this.state;
        return (
            <div className='realtors-page'>
                <h1 className='realtors-page__heading'>WHO HAVE MADE THOUSANDS OF CUSTOMERS HAPPY</h1>
                <div className='realtors-page__realtors'>
                    {
                        realtors.map(realtor => (
                            <RealtorCard realtor={realtor} key={realtor.email} />
                        ))
                    }
                </div>
            </div>
        )
    }
};

export default RealtorsPage;