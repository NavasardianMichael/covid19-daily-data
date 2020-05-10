import React from 'react';
import Data from './components/Data';
import SearchArea from './components/SearchArea';

function App() {
  return (
    <div className="container">
      <h1 className="text-center mt-4">COVID19 DAILY INFO</h1>
      <p className="mt-1 mb-4 text-secondary text-center">The information is updated every 15 minutes</p>
      <SearchArea />
      <Data />
    </div>
  );
}

export default App;

// fetch("https://covid-19-data.p.rapidapi.com/report/country/all?date-format=YYYY-MM-DD&format=json&date=2020-04-01", {
//   "method": "GET",
//   "headers": {
//     "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
//     "x-rapidapi-key": "7827889b5bmsh5d1ac9ac9c7b80bp1401dejsnfcde920261bb"
//   }
// })
// .then(response => {
//   console.log(response);
// })
// .catch(err => {
//   console.log(err);
// });