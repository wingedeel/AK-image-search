import { ITEM_SELECTED } from '../actions/index';

export default function (state = null, action) {
	switch (action.type) {
		case 'ITEM_SELECTED':
			return action.payload;
	}
	return state;
}