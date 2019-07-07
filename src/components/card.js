import React from 'react';

//imports
import Title from './title'
import Tag from './tag'

const Card = ({title, mapthetags}) => {
    return (
        <div className="card" style={{border: '1px solid grey', padding: '20px'}}>
            <Title label={title}/>
            {mapthetags.map(datatags => {
                return <Tag singletag={datatags}/>;
            })}
        </div>
    )
}

export default Card;

