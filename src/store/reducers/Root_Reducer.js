import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import { mostPopularReducer } from './MostPopular_Reducer';
import { mostPopularTvShowsReducer } from './MostPopularTvShows_Reducer';
import { currentShowsReducer } from './CurrentTvShows_Reducer';
import { upcomingReducer } from './Upcoming_Reducer';
import { popularPeopleReducer } from './PopularPeople_Reducer';
import { authReducer } from './Auth_Reducer';
import { searchReducer } from './Search_Reducer';
import { WidgetsReducer } from './Widgets_Reducer';

const RootReducer = combineReducers({
    mostPopular: mostPopularReducer,
    upcoming: upcomingReducer,
    popularPeople: popularPeopleReducer,
    popularTvShows: mostPopularTvShowsReducer,
    currentTvShows: currentShowsReducer,
    searchData: searchReducer,
    auth: authReducer,
    form: formReducer,
    widgetsSelection: WidgetsReducer

});

export default RootReducer;
