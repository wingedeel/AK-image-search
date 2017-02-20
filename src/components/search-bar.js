import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSearchTerm, fetchResults } from '../actions/index';

class SearchBar extends Component {

	constructor(props){
		super(props)
    	this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}
	
	onFormSubmit(event){
		event.preventDefault();
		this.props.fetchResults(this.props.searchTerm);
	}
	

	onInputChange(event){
		this.props.setSearchTerm(event.target.value);
	}


	render() {
		return (
			<div className="search-bar">
				<h4>Pixabay Image Search</h4>
				<h6>using React, Redux and react-motion</h6>
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


// connect() will automatically bind dispatch to your actions 
// if they are passed in as an object of function names.
export default connect (mapStateToProps, {fetchResults, setSearchTerm} )(SearchBar);