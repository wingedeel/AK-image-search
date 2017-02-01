
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectListItem } from '../actions/index';


class List extends Component {

	// Helper function to build our list
	// All items available as an array as this.props.items
	renderList() {
		return this.props.items.map( (item) => {
			
			return (
			
		        <div key={item.id} className="result-card col-xs-6 col-sm-4">
		           
					<div className="result-card-text-item">ID:&nbsp;{item.id}</div>
		           	<div className="result-card-text-item">Tags Here:&nbsp;{item.tags}</div>
		          	
		             <button className="btn-view-image" onClick={() => this.props.selectListItem(item)}>
		             	View Image
		             </button>
		          
		           	<img src={item.webformatURL} alt={item.id} />
		     
		        </div>
			);

		});
	}

	render() {
		return (
			<div className="results">
				{this.renderList()}
			</div>
		)
	}

}


function mapStateToProps(state){
	return { 
		items: state.items.all ,
		searchTerm: state.searchTerm
	};
}


export default connect ( mapStateToProps, {selectListItem}) (List);


