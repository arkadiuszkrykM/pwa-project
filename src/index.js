import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import RootReducer from './store/reducers/Root_Reducer';
import App from './containers/App/App';


const axClient = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

// const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(axClient))));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
