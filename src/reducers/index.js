import { GET_DATA } from '../actions/index';

const reducer = (state, action) => {
    switch (action.type) {
        case GET_DATA:
            const event = { action }
            const id = state
            return { id, ...event };
        default:
            return state
    }
}

export default reducer;