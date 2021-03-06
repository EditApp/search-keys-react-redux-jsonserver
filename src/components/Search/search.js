import React from 'react';
import styles from './search.module.css'

//import custom components
import SearchIcon from '../Icons/searchIcon'
import SearchButton from '../Buttonrect/button'

const Search = (props) => {
    return (
        <form role="search" className={styles.searchcontainer}>
            <label htmlFor="search">
                <SearchButton>
                    <SearchIcon/>
                </SearchButton>
            </label>
            <input className={styles.searchinput} id="search" placeholder={'Que cherchez-vous ?'} type="text" onChange={event => props.keywords(event)}/>
        </form>
    )
}

export default Search;