import React from 'react';
import { useDispatch, useStore, connect } from 'react-redux';

import { fetchAllData, showAllData } from '../redux/actions';
import DataItem from './DataItem';

function Data(props) {
	const dispatch = useDispatch();

	function loadAllData() {
		dispatch(fetchAllData());
	};

	const data = props.allData.map(item => <DataItem country={item} key={item.country}/>)
	
	return (
		<div className="data">
			<button type="button" className="btn btn-danger" onClick={loadAllData}>Load most affected countries</button>
            <div className="cards-section mt-4">
            	<div className="row m-0">
            		{data}
            	</div>
            </div>
		</div>
	)
};

const mapStateToProps = state => {
	return {
		allData: state.data.showData
	}
}

export default connect(mapStateToProps, null)(Data)