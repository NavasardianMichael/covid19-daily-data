import React from 'react';

function DataItem(props) {
	return (
		<div className="col-lg-3 col-md-4 col-sm-6 p-0">
			<div className="card">
			  <div className="card-body">
			    <h5 className="card-title">{props.country.country}</h5>
			    <h6 className="card-subtitle mb-2 text-muted">deaths: {props.country.provinces[0].deaths}</h6>
			    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			  </div>
			</div>
		</div>		
	)
}

export default DataItem