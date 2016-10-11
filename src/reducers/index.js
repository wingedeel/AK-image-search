// This combines all the Reducers into a 'root reducer'
// and returns them

import { combineReducers } from 'redux';

import ListReducer from './reducer_list';
import ActiveItemReducer from './reducer_active_item';
import SearchTermReducer from './reducer_search_term';


const rootReducer = combineReducers({
	items: ListReducer,
	activeItem: ActiveItemReducer,
	searchTerm: SearchTermReducer
});

export default rootReducer;
