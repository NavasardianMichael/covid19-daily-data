import { SET_ALL_DATA, SHOW_ALL_DATA, ADD_SHOW_DATA } from './types';

const initialState = {
	allData: [],
	showData: []
}

export function dataReducer(state = initialState, action) {
	switch (action.type) {
		case SET_ALL_DATA:
			return {...state, allData: action.allData}
		case SHOW_ALL_DATA:
			return {...state, showData: state.allData}
		case ADD_SHOW_DATA:
			return {...state, showData: [...state.showData, action.showData]}			
		default: return state
	}
};