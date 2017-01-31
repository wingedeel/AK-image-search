
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectListItem } from '../actions/index';


class List extends Component {

	// Helper function to build our list
	// All items available as an array as this.props.items
	renderList() {
		return this.props.items.map( (item) => {
			
			return (
			
				<div key={item.id} className="col-xs-6 col-sm-4">

		        <div className="resultImageBg">
		           <img 
		            className="resultImage"
		           	src={item.webformatURL} 
		           	alt={item.id} 
		           />
		     
		           <div className="resultImageID">ID:&nbsp;{item.id}</div>
		           <div className="resultImageTags">Tags Here:&nbsp;{item.tags}</div>
		           <a className="btnViewImage" onClick={() => this.props.selectListItem(item)}>
		             View Image
		           </a>
		         
		        </div>
		      </div>
			);

		});
	}

	render() {
		return (
			<div>
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


