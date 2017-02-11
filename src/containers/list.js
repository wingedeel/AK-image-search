import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectListItem } from '../actions/index';
import { Motion, spring } from 'react-motion';

const ListItem = ({item}) => {
	return (
		  <div className="result-card col-xs-6 col-sm-4">         
			<div className="result-card-text-item">ID:&nbsp;{item.id}</div>
          	<div className="result-card-text-item">Tags Here:&nbsp;{item.tags}</div>
            <button className="btn-view-image" onClick={() => this.props.selectListItem(item)}>
             View Image
            </button>
           	<img src={item.webformatURL} alt={item.id} />
        </div>
	)
}

class List extends Component {
	render() {
		return (
			<div className="results">
				{this.props.items.map( (item,index) => {
					const rotateEnd = index % 2 === 0 ? 360 : -360;
					return  (
						<Motion 
							key={item.id} 
							defaultStyle={{x:0, opacity:0, scale:0}} 
							style={{
								x: spring(rotateEnd,[1,1]), 
								opacity:spring(1,[1,1]), 
								scale:spring(1, [1,1])
							}}>

			    			{({x, opacity, scale}) => 
				    			<div className="result-card" key={item.id} item={item} 
				    				style={{
				    					border: '1px solid grey',
				    					transform: `scale(${scale}) rotate(${x}deg)`
				    				}}>
				    				 <div className="photo-overlay">
						    			<div className="text-item">ID: {item.id}</div>
						    			<div className="text-item">Tags: {item.tags}</div>
						    			<button 
						    				className="btn-view-image" 
						    				onClick={() => this.props.selectListItem(item)}>View</button>
						    		</div>
		           					<img src={item.webformatURL} alt={item.id} />
	    						</div>
    						}
    					</Motion>
					)
				})}	
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


