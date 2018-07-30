import { IS_USER_AUTH } from '../consts/Constants';

export const initialState = {};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_USER_AUTH:
            return action.payload;
        default:
            return state;
    }
};
