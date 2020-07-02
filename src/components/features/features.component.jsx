import React from 'react';

import './features.styles.scss';

import { ReactComponent as BestHomes} from '../../icons/best-homes.svg';
import { ReactComponent as Solution } from '../../icons/solution.svg';
import { ReactComponent as Key } from '../../icons/key.svg';
import { ReactComponent as Realtor } from '../../icons/realtor.svg';
import { ReactComponent as Bungalow } from '../../icons/bungalow.svg';
import { ReactComponent as Satisfied } from '../../icons/satisfied.svg'; 

const Features = () => (
    <div className='features'>
        <div className='features__content'>
            <BestHomes className='features__content--icon' />
            <h4 className='features__content--heading'>Only the best homes to choose from</h4>
            <p className='features__content--paragraph'>Divine Homes gives you only the best options to choose from, so that you have the ultimate personal freedom in your own home. Just give us the location and we show you the best</p>
        </div>

        <div className='features__content'>
            <Solution className='features__content--icon' />
            <h4 className='features__content--heading'>All queries regarding your future home solved</h4>
            <p className='features__content--paragraph'>Divine Homes provides you with a very knowledgeable and experienced team of Realtors who explain you all the details of the property you are interested in.</p>
        </div>

        <div className='features__content'>
            <Key className='features__content--icon' />
            <h4 className='features__content--heading'>Get the keys to home within a week</h4>
            <p className='features__content--paragraph'>Divine Homes promises to deliver the keys to your new home right within a week, so that you do not have to contain the excitement of moving to your new home for long.</p>
        </div>

        <div className='features__content'>
            <Realtor className='features__content--icon' />
            <h4 className='features__content--heading'>Top rated realtorsof the country</h4>
            <p className='features__content--paragraph'>The Realtors who will be providing you with their services are rated amongst the top across the country, with a large number of satisfied and happy customers.</p>
        </div>

        <div className='features__content'>
            <Bungalow className='features__content--icon' />
            <h4 className='features__content--heading'>All range of houses you can dream of</h4>
            <p className='features__content--paragraph'>Divine Homes provides to you a large collection of real estates which contains all kinds of houses ranging from small ones to large bunglows.</p>
        </div>

        <div className='features__content'>
            <Satisfied className='features__content--icon' />
            <h4 className='features__content--heading'>Large number of satisfied customers</h4>
            <p className='features__content--paragraph'>Divine Homes has been giving its service for a long time and the number of satisfied customers has increased to a large one. All reviews can be viewed in our reviews section.</p>
        </div>
    </div>
)

export default Features;