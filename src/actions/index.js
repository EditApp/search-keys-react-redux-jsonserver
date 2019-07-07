import axios from 'axios';

const URL = 'http://localhost:3004';

export function cardsListAll() {
    const request = axios.get(`${URL}/cardsdata`)
                    .then(response => response.data)
    return {
        type: 'GET_CARDS_ALL',
        payload: request
    }
}