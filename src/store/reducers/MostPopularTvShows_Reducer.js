import { FETCH_MOSTPOPULAR_TVSHOWS_FULFILLED } from '../consts/Constants';

export const initialState = [];

export const mostPopularTvShowsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOSTPOPULAR_TVSHOWS_FULFILLED:
            return [...action.payload];
        default:
            return state;
    }
};
