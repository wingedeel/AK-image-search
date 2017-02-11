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


function mapStateToProps(state){
	return{
		activeItem: state.activeItem
	};
}

export default connect (mapStateToProps) (ListItemDetail)