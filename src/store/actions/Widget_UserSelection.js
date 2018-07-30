import { USER_SELECTED_VOTES, USER_SELECTED_DATES } from '../consts/Constants';

export const widgetUserSelection = data => (dispatch) => {
    if (data.match(/-/g)) {
        return dispatch({
            type: USER_SELECTED_DATES,
            payload: data
        });
    }

    return dispatch({
        type: USER_SELECTED_VOTES,
        payload: data
    });
};
