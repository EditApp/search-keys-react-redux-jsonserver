import React from 'react'
import styles from './buttonrect.module.css'

const SearchButton = (props) => {
    return (
        <div className={styles.searchbtn} >
            {props.children}
        </div>
    )
}
export default SearchButton


