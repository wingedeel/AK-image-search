
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

		        <div className="thumbnail">

		          <div className="image-preview">
		            <a className="gallery" title={item.id}>
		              <img className="img-rounded" src={item.webformatURL} alt={item.id} width={this.getImageWidth()} height={this.getImageHeight()}/>
		            </a>
		          </div>

		  
		          <div className="caption text-center">
		            <div className="imageID">ID:&nbsp;{item.id}</div>
		            <div className="tags">Tags:&nbsp;{item.tags}</div>
		            <div><a className={"btn btn-primary" } onClick={() => this.props.selectListItem(item)}>
		             View Image
		            </a></div>
		          </div>
		          
		        </div>
		      </div>
			);

		});
	}


	getImageWidth() {
		return 300;
	}

	getImageHeight() {
		return 200;
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


