import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setSearchTerm, fetchSearchResults } from '../actions/index';


class SearchBar extends Component {
	constructor(props){
		super(props)
    	this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}
	
	onFormSubmit(event){
		// Stop the click from going anywhere
		event.preventDefault();
		// Do the search
		this.props.fetchSearchResults(this.props.searchTerm);
	}
	

	onInputChange(event){
		// Set SearchTerm in Application State
		this.props.setSearchTerm(event.target.value);
	}


	render() {
		return (
			<div className="searchBar">
			<h4>ak-image-search</h4>
			<h6>A simple Image Search using React, Redux and Pixabay API</h6>
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input
					placeholder="Please enter a search term"
					className="form-control"
					value={this.props.searchTerm}
					onChange={this.onInputChange}/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
			</div>
		)
	}

}


function mapStateToProps( state ) {
	return {
		searchTerm: state.searchTerm
	}
}



export default connect (mapStateToProps, {fetchSearchResults, setSearchTerm} )(SearchBar);