import { USER_SELECTED_VOTES, USER_SELECTED_DATES } from '../consts/Constants';

export const initialState = [];

export const WidgetsReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_SELECTED_DATES:
            return action.payload;
        case USER_SELECTED_VOTES:
            return action.payload;

        default: return state;
    }
};
