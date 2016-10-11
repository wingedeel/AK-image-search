/*
The BookDetail component is a 'container' because 
its cares about the 'activeBook' element of the Application State.
A Container is a component that is aware of the Application State.
*/

import React, {Component} from 'react';
import { connect } from 'react-redux';


class ListItemDetail extends Component {
	render() {
		return (
			<div>
				<h3>Image Details:</h3>
				<div>URL: {this.props.activeItem.pageURL}</div>
				<div>Tags: {this.props.activeItem.tags}</div>
			</div>
		)
	}
}

/*
This function converts/maps the specified chunk of Application State
(state.activeBook) to a Prop(book) which the BookDetails React
component can then use
*/
function mapStateToProps(state){
	return{
		activeItem: state.activeItem
	};
}

export default connect (mapStateToProps) (ListItemDetail)