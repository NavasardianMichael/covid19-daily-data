import { SET_ALL_DATA } from './types';

export function setAllData(allData) {
	return {
		type: SET_ALL_DATA,
		allData
	}
};

export function fetchAllData() {
	return function(dispatch) {
			var allData = [];
			fetch("https://covid-19-data.p.rapidapi.com/report/country/all?date-format=YYYY-MM-DD&format=json&date=2020-04-01", {
			  "method": "GET",
			  "headers": {
			    "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
			    "x-rapidapi-key": "7827889b5bmsh5d1ac9ac9c7b80bp1401dejsnfcde920261bb"
			  }
			})
			.then(response => response.json())
			.then(data => {
				allData = data.slice(0, 10);
				dispatch(setAllData(allData));
			})
	}
}