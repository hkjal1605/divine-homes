import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './search-box.styles.scss';

import { ReactComponent as Search } from '../../icons/search.svg';

import { handleChange, clearSearch } from '../../redux/search-box/search-box.actions';
import { selectSearchInput } from '../../redux/search-box/search-box.selector';
import { selectCityForPreview } from '../../redux/city/city.selector';

const SearchBox = ({ handleChange, searchInput, cityList, clearSearch }) => {
    const cities = cityList.map(city => city.title.toLowerCase());
    return (
        <div className='input'>
            <input className='input__search' id='input-search' type='search' placeholder='Search by City' onChange={(e) => handleChange(e)} />
            {
                cities.includes(searchInput) ? (
                    <Link to={`/city/${searchInput}`} >
                        <Search className='input__search--icon' onClick={() => clearSearch()} />
                    </Link>
                ) : (
                    <Search className='input__search--icon' onClick={() => {
                        alert(`Please choose from ${cities}`);
                        clearSearch()
                    }} />
                )
            }
        </div>
    );
};

const mapStateToProps = (state) => ({
    searchInput: selectSearchInput(state),
    cityList: selectCityForPreview(state)
})

const mapDispatchToProps = dispatch => ({
    handleChange: (event) => dispatch(handleChange(event)),
    clearSearch: () => dispatch(clearSearch())
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);