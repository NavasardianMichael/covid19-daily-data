import { SET_ALL_DATA, SHOW_ALL_DATA, ADD_SHOW_DATA } from './types';

export function setAllData(allData) {
	return {
		type: SET_ALL_DATA,
		allData
	}
};

export function showAllData(allData) {
	return {
		type: SHOW_ALL_DATA
	}
};

export function showData(showData) {
	return {
		type: ADD_SHOW_DATA,
		showData
	}
};

export function fetchAllData() {
	return function(dispatch) {
			var allData = [];
			fetch("https://covid-193.p.rapidapi.com/statistics", {
				"method": "GET",
				"headers": {
					"x-rapidapi-host": "covid-193.p.rapidapi.com",
					"x-rapidapi-key": "7827889b5bmsh5d1ac9ac9c7b80bp1401dejsnfcde920261bb"
				}
			})
			.then(response => response.json())
			.then(data => {
				allData = data.response.slice(0, 40);
				dispatch(setAllData(allData));
			})
			.then(() => dispatch(showAllData()))
	}
}