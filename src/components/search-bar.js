import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSearchTerm, fetchResults } from '../actions/index';

class SearchBar extends React.Component {

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
			<div>
				<form onSubmit={this.onFormSubmit}>
					<input className="search-bar"
						placeholder="Enter search term here"
						value={this.props.searchTerm}
						onChange={this.onInputChange}/>
					<span>
						<button className="search-bar" type="submit">Submit</button>
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