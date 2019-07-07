import React from 'react'

import styles from './tag.module.css'

const Tag = (props) => {
    return <div className={styles.tag} >{props.singletag}</div>;
  }

export default Tag
