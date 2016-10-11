import { ITEM_SELECTED } from '../actions/index';

export default function (state = null, action) {
	switch (action.type) {
		case 'ITEM_SELECTED':
			return action.payload;
	}
	// If we don't care about the current action
	// just return the existing state
	return state;
}