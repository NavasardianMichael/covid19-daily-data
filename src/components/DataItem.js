import React from 'react';

function DataItem(props) {
	return (
		<div className="col-lg-4 col-md-4 col-sm-6 p-0">
			<div className="card">
			  <div className="card-body">
			    <h2 className="card-title">{props.country.country}</h2>
			    <h4 className="card-subtitle my-2 text-muted">Cases</h4>
				  <div className="row">
				  	<div className="col-4 font-weight-bold">total</div>
				  	<div className="col-4 font-weight-bold">active</div>
				  	<div className="col-4 font-weight-bold">recovered</div>
				  </div>
				  <div className="row">
				  	<div className="col">{props.country.cases.total}</div>
				  	<div className="col">{props.country.cases.active}</div>
				  	<div className="col">{props.country.cases.recovered}</div>
				  </div>
				  <div className="row">
				  	<div className="col-4 font-weight-bold">critical</div>
				  	<div className="col-4 font-weight-bold">new</div>
				  </div>
				  <div className="row">
				  	<div className="col-4">{props.country.cases.critical}</div>
				  	<div className="col-4">{props.country.cases.new || 0}</div>
				  </div>
				  <h4 className="card-subtitle my-2 text-muted">Deaths</h4>
				  <div className="row">
				  	<div className="col-4 font-weight-bold">total</div>
				  	<div className="col-4 font-weight-bold">new</div>
				  </div>
				  <div className="row">
				  	<div className="col-4">{props.country.deaths.total}</div>
				  	<div className="col-4">{props.country.deaths.new || 0}</div>
				  </div>				  				  				  
			  </div>
			</div>
		</div>		
	)
}

export default DataItem