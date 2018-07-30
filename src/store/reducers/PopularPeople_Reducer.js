import { FETCH_POPULARPEOPLE_FULFILLED } from '../consts/Constants';

export const initialState = [];

export const popularPeopleReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POPULARPEOPLE_FULFILLED:
            return [...action.payload];
        default:
            return state;
    }
};
