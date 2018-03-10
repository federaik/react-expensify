import { combineReducers } from 'redux';
import { itemsIsLoadingReducer, itemsHasErroredReducer, itemsFetchSuccessReducer } from './fetch-reducers';

export default combineReducers({
    itemsIsLoadingReducer, itemsHasErroredReducer, itemsFetchSuccessReducer
});