import { API_KEY } from '../../constants/APIKEY';
import { FETCH_POPULARPEOPLE_FULFILLED } from '../consts/Constants';

const URL = `person/popular?api_key=${API_KEY}&language=en-US&page=1`;

export const fetchPopularPeople = () => async (dispatch, getState, axClient) => {
    const { data: { results } } = await axClient.get(URL);
    return dispatch({
        type: FETCH_POPULARPEOPLE_FULFILLED,
        payload: results
    });
};
