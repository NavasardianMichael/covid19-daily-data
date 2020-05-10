import React, {useEffect, useState} from 'react';
import FoundCountry from './FoundCountry';

function SearchArea() {

	const [ countriesNames, setCountriesNames] = useState([]);
	const [ currentSearchText, setCurrentSearchText ] = useState('');
	const [ foundCountries, setFoundCountries ] = useState([]);

	useEffect(() => {
			fetch("https://covid-19-data.p.rapidapi.com/report/country/all?date-format=YYYY-MM-DD&format=json&date=2020-04-01", {
			  "method": "GET",
			  "headers": {
			    "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
			    "x-rapidapi-key": "7827889b5bmsh5d1ac9ac9c7b80bp1401dejsnfcde920261bb"
			  }
			})
		.then(response => response.json())
		.then(data => {
			var countriesNamesLocal = [];
			data.map(item => {
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
		countriesNames.map(country => {
			if(value !== '' && country.country.toLowerCase().indexOf(value.toLowerCase()) === 0) {
				foundCountriesLocal.push(country);
			}
		});
		console.log(foundCountriesLocal);
		setFoundCountries(foundCountriesLocal);
	};

	const foundCountriesItems = foundCountries.map(country => <FoundCountry country={country} />) 

	return (
		<div className="search-area">
			<div className="input-group mb-3">
			  <input type="text" className="form-control" placeholder="Search for countries manually" onChange={typingHandler} value={currentSearchText}/>
			  <div className="input-group-append">
			    <button className="btn btn-outline-danger px-5" type="button">Find</button>
			  </div>
			</div>
			<div className="row mx-0 my-3 found-countries-block">
				{foundCountriesItems}
			</div>
		</div>
	)
}

export default SearchArea