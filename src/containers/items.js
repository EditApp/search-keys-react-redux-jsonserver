import React, { Component } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { cardsListAll } from '../actions';
import { bindActionCreators } from 'redux';


import CardList from '../containers/cardlist'


import Search from '../components/search';
import Card from '../components/card';

class ItemsContainer extends Component {

    // state = {
    //     items: []
    // }
    componentWillMount() {
        //getting data from json-server using axios
        // axios.get("http://localhost:3004/cardsdata")
        // .then(response => {
        //     this.setState({
        //         items: response.data
        //     })
        //     console.log(this.state.items)
        // })
    }
    getKeywords = (event) => {
        let key = event.target.value;
        console.log(key)
    }

    render(){
        // const {items} = this.state;
        return (
            <div>
            <Search  keywords={this.getKeywords} />
            {/* <CardList>
                { items && items.length != -1 ?
                    items.map( carditem => (
                        <Card title={carditem.name} mapthetags={carditem.tags} />
                    )) : null
                }
            </CardList> */}
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
    return bindActionCreators({cardsListAll},dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(ItemsContainer)
// export default ItemsContainer