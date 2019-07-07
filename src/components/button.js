import React from 'react'

const SearchButton = (props) => {
    return (
        <div style={{border: '1px solid grey', padding: '10px', width: '40px',height: '40px', display:'inline-block'}} >
            {props.children}
        </div>
    )
}
export default SearchButton


