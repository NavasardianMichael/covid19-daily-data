import React, {useEffect, useState} from 'react';
import FoundCountry from './FoundCountry';

function SearchArea() {

	const [ countriesNames, setCountriesNames] = useState([]);
	const [ currentSearchText, setCurrentSearchText ] = useState('');
	const [ foundCountries, setFoundCountries ] = useState([]);

	useEffect(() => {
		fetch("https://covid-193.p.rapidapi.com/statistics", {
			"method": "GET",
			"headers": {
				"x-rapidapi-host": "covid-193.p.rapidapi.com",
				"x-rapidapi-key": "7827889b5bmsh5d1ac9ac9c7b80bp1401dejsnfcde920261bb"
			}
		})
		.then(response => response.json())
		.then(data => {
			var countriesNamesLocal = [];
			data.response.map(item => {
				countriesNamesLocal.push(item);
		});
			setCountriesNames(countriesNamesLocal);
		})
		.catch(err => {
			console.log(err);
		});	    
	  }, []);

	function typingHandler(event) {
		const value = event.target.value;
		setCurrentSearchText(previousState => value);
		var foundCountriesLocal = [];
		countriesNames.map(item => {
			if(value !== '' && item.country.toLowerCase().indexOf(value.toLowerCase()) === 0) {
				foundCountriesLocal.push(item);
			}
		});
		setFoundCountries(foundCountriesLocal);
	};

	const foundCountriesItems = foundCountries.map(item => <FoundCountry country={item} key={item.country} />) 

	return (
		<div className="search-area">
			<input type="text" className="form-control" placeholder="Search for countries manually" onChange={typingHandler} value={currentSearchText}/>
			<div className="row mx-0 my-3 found-countries-block">
				{foundCountriesItems}
			</div>
		</div>
	)
}

export default SearchArea