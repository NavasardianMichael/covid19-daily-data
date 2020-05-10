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
			if(!state.showData.includes(action.showDataItem)) {
				return {...state, showData: [...state.showData, action.showDataItem]}			
			}
		default: return state
	}
};