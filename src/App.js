import React from 'react';
import Data from './components/Data';
import SearchArea from './components/SearchArea';

function App() {
  return (
    <div className="container">
      <h1 className="text-center my-4">COVID19 DAILY INFO</h1>
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