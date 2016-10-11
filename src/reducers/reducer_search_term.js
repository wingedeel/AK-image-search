import { SEARCH_TERM_SELECTED } from '../actions/index';

export default function (state = null, action) {
	
	switch (action.type) {
		case 'SEARCH_TERM_SELECTED':
			return action.payload;
	}
	// If we don't care about the current action
	// just return the existing state
	return state;
}