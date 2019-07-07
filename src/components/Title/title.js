import React from 'react'
import styles from './title.module.css'

const Title = (props) => {
    return <h2 className={styles.title}>{props.label}</h2>;
}

export default Title
