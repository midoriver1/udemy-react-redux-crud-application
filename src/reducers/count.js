import { INCREMENT, DECREMENT} from '../actions'
import {validate} from "@babel/types";

const initialState =  { value: 0};

export default (state = initialState, action) => {
    switch (action.type)  {
        case INCREMENT:
            return { state.value + 1}
        case DECREMENT:
            return { state.value - 1}
        default:
            return state

    }
}