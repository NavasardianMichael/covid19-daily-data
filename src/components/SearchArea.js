import React from 'react';

function SearchArea() {
	return (
		<div className="search-area">
			<div className="input-group mb-3">
			  <input type="text" className="form-control" placeholder="Manual search"/>
			  <div className="input-group-append">
			    <button className="btn btn-outline-danger" type="button">Find</button>
			  </div>
			</div>
		</div>
	)
}

export default SearchArea