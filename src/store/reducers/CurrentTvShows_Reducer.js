import { FETCH_CURRENT_TVSHOWS_FULFILLED } from '../consts/Constants';

export const initialState = [];

export const currentShowsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CURRENT_TVSHOWS_FULFILLED:
            return [...action.payload];
        default:
            return state;
    }
};
