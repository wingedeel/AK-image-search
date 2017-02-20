import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchTerm, selectResult } from '../actions/index';
import { Motion, spring } from 'react-motion';

const Tags = ( {tags, setSearchTerm} ) => {
	const tagsArray = tags.split(',');
	return (
		<div className="text-item">
		{tagsArray.map(tag => {
			return <button 
					key={tag}
					className="tag" 
					onClick={() => setSearchTerm(tag)}>{tag}
					</button>
		})}
		</div>
	)
}

class Results extends Component {
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
						    			<div className="text-item">Image ID: {item.id}</div>
						    			<Tags tags={item.tags} setSearchTerm={this.props.setSearchTerm}/>
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

export default connect ( mapStateToProps, {selectResult, setSearchTerm}) (Results);


