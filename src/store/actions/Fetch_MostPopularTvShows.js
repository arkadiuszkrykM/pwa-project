import { API_KEY } from '../../constants/APIKEY';
import { FETCH_MOSTPOPULAR_TVSHOWS_FULFILLED } from '../consts/Constants';

const URL = `tv/popular?api_key=${API_KEY}&language=en-US&page=1`;


export const fetchMostPopularTvShows = () => async (dispatch, getState, axClient) => {
    const { data: { results } } = await axClient.get(URL);
    return dispatch({
        type: FETCH_MOSTPOPULAR_TVSHOWS_FULFILLED,
        payload: results
    });
};
