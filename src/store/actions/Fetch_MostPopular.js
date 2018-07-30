import { API_KEY } from '../../constants/APIKEY';
import { FETCH_MOSTPOPULAR_FULFILLED } from '../consts/Constants';

const URL = `movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

export const fetchMostPopular = () => async (dispatch, getState, axClient) => {
    const { data: { results } } = await axClient.get(URL);
    return dispatch({
        type: FETCH_MOSTPOPULAR_FULFILLED,
        payload: results
    });
};
