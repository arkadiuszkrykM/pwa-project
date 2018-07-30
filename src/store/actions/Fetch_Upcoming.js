import { API_KEY } from '../../constants/APIKEY';
import { FETCH_UPCOMING_FULFILLED } from '../consts/Constants';

const URL = `movie/now_playing?api_key=${API_KEY}&language=en-US&page=2`;

export const fetchUpcoming = () => async (dispatch, getState, axClient) => {
    const { data: { results } } = await axClient.get(URL);
    return dispatch({
        type: FETCH_UPCOMING_FULFILLED,
        payload: results
    });
};
