import {data} from '../data'



const INITIAL_STATE = {
    product: data,
    card: {}
}



export function reducer( state = INITIAL_STATE, action){
    switch(action.type){
        case 'ADD_BASKET':
            console.log(action.payload)
            let card = state.card
            console.log(card)
            if (card[action.payload.id]){
                card[action.payload.id].qty +=1
            }else{
                card[action.payload.id] = action.payload
                card[action.payload.id].qty = 1}
            return {...state, card}
            
            default:
                return state
        case "DELETE_BASKET":
            let newElements = state.card;
            console.log(newElements);
            console.log(action.payload.id);
            delete newElements[action.payload.id]
            return {...state, card: newElements}

        }
  }

