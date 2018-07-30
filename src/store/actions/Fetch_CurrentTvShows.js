import { API_KEY } from '../../constants/APIKEY';
import { FETCH_CURRENT_TVSHOWS_FULFILLED } from '../consts/Constants';

const URL = `tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1`;


export const fetchCurrentTvShows = () => async (dispatch, getState, axClient) => {
    const { data: { results } } = await axClient.get(URL);
    return dispatch({
        type: FETCH_CURRENT_TVSHOWS_FULFILLED,
        payload: results
    });
};
