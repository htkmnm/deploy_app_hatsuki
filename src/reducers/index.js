import { CLICK_EVENT } from '../actions/index';

const reducer = (state = [], action) => {
    switch (action.type) {
        case CLICK_EVENT:
            const event = { text: action.text }
            const id = state.text
            return [...state, { id, ...event }]
        default:
            return state
    };
};


export default reducer;
