import React from 'react';

//imports custom components
import Card from '../components/card'

const CardList = (props) => {
    return (
        <article>
            { props.jsoncards && props.jsoncards.length != -1 ?
                props.jsoncards.map( carditem => (
                    <Card key={carditem.id} title={carditem.name} mapthetags={carditem.tags} />
                )) : null
            }
        </article>
    )
  }
export default CardList