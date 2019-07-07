import axios from 'axios';

const URL = 'http://localhost:3004';


export function cardsFilter(keywords){
    const request = axios.get(`${URL}/cardsdata?q=${keywords}`)
                    .then(response => response.data)
    return {
        type: 'GET_CARDS',
        payload: request
    }
}


export function cardsListAll() {
    const request = axios.get(`${URL}/cardsdata`)
                    .then(response => response.data)
    return {
        type: 'GET_CARDS_ALL',
        payload: request
    }
}