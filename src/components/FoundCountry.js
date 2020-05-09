import React from 'react';

function FoundCountry(props) {
	return (
		<div className="col-12 py-2 text-left btn btn-outline-danger border">
			{props.countryName}
		</div>		
	)
}

export default FoundCountry