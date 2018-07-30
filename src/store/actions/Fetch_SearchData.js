import { API_KEY } from '../../constants/APIKEY';
import { FETCH_SEARCH_FULFILLED } from '../consts/Constants';


export const fetchSearch = searchData => async (dispatch, getState, axClient) => {
    const movieURL = `search/movie?api_key=${API_KEY}&language=en-US&query=${searchData}&page=1`;
    // const tvURL = `search/tv?api_key=${API_KEY}&language=en-US&query=${searchData}&page=1`;
    const { data: { results } } = await axClient.get(movieURL);
    return dispatch({
        type: FETCH_SEARCH_FULFILLED,
        payload: results
    });
};
