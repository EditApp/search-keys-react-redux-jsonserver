import React from 'react';

//imports
import SearchIcon from './Icons/searchIcon'
import SearchButton from './button'

const Search = (props) => {
    return (
        <div className="search_container">
            <h2> Search your items</h2>
            <label htmlFor="search">
            <SearchButton>
                <SearchIcon />
            </SearchButton>
            </label>
            <input id="search" placeholder={'que cherchez-vous ?'} type="text" onChange={event => props.keywords(event)}/>
        </div>
    )
}

export default Search;