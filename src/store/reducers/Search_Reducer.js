import { FETCH_SEARCH_FULFILLED } from '../consts/Constants';

export const initialState = [];

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SEARCH_FULFILLED:
            return [...action.payload];
        default:
            return state;
    }
};
