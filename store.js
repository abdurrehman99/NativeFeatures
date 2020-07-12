import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleWare = [thunk];
let composeEnhancer = compose;
if (__DEV__) {
  {
    composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
  }
}
const store = createStore(
  rootReducer,
  // {},
  composeEnhancer(),
  // applyMiddleware(...middleWare),
  // compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__),
);

export default store;
