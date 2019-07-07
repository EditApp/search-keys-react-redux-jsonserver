import React, { Component } from 'react';

import { connect } from 'react-redux';
import { cardsListAll, cardsFilter } from '../actions';
import { bindActionCreators } from 'redux';


import CardList from '../containers/cardlist'


import Search from '../components/search';

class ItemsContainer extends Component {

    componentWillMount() {
        this.props.cardsListAll();
    }
    getKeywords = (event) => {
        let key = event.target.value;
        this.props.cardsFilter(key)
    }

    render(){
        console.log(this.props.cards.cardList)

        return (
            <div>
            <Search key={''}  keywords={this.getKeywords} />
            <CardList jsoncards={this.props.cards.cardList}/>
            </div>
        )
    }
}


function mapStateToProps(state){
    return {
        cards:state.cards
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({cardsListAll, cardsFilter},dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(ItemsContainer)
