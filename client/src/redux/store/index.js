import { createStore, applyMiddleware, compose } from 'redux';
import Reducer from '../reducers/index';
import thunk from 'redux-thunk';

//para poder usar extension Redux DevTools
const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(Reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;