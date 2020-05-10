import React from 'react';
import { useDispatch } from 'react-redux';
import { showData } from '../redux/actions';

function FoundCountry(props) {
	const dispatch = useDispatch();

	function clickHandler() {
		dispatch(showData(props.country));
	}
	return (
		<div className="col-12 py-2 text-left btn btn-outline-danger border" onClick={clickHandler}>
			{props.country.country}
		</div>		
	)
}

export default FoundCountry