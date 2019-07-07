import React from 'react';
import styles from './card.module.css';

//import custom components
import Title from '../Title/title'
import Tag from '../Tag/tag'

const Card = ({title, mapthetags}) => {
    return (
        <div className={styles.card}>
            <Title label={title}/>
            {mapthetags.map(datatags => {
                return <Tag key={`id-${datatags}`} singletag={datatags}/>;
            })}
        </div>
    )
}

export default Card;

