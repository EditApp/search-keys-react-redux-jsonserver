//return function with action

export default function(state={}, action) {

    switch(action.type){
        case 'GET_CARDS_ALL':
        return {...state,cardList:action.payload}
        default:
            return state;
    }
}