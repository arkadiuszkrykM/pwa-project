import { FETCH_UPCOMING_FULFILLED } from '../consts/Constants';

export const initialState = [];

export const upcomingReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_UPCOMING_FULFILLED:
            return [...action.payload];
        default:
            return state;
    }
};
