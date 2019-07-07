import React from 'react';

import Card from '../components/card'

const CardList = (props) => {
    return (
        <section>
            { props.jsoncards && props.jsoncards.length != -1 ?
                props.jsoncards.map( carditem => (
                    <Card key={carditem.id} title={carditem.name} mapthetags={carditem.tags} />
                )) : null
            }
        </section>
    )
  }
export default CardList