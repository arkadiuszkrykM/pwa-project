import { FETCH_MOSTPOPULAR_FULFILLED } from '../consts/Constants';

export const initialState = [];

export const mostPopularReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOSTPOPULAR_FULFILLED:
            return [...action.payload];
        default:
            return state;
    }
};
