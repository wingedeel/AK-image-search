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

const ResultCard = ( {item, setSearchTerm, style} ) => { 
	return(
		<div className="result-card" key={item.id} item={item} style={style}>
			<img src={item.webformatURL} alt={item.id} />
				<Tags tags={item.tags} setSearchTerm={setSearchTerm}/>
		</div>
	)
}

class Results extends Component {

	render() {
		const {items, setSearchTerm} = this.props
		
		const styleDefault = {x:0, opacity:0, scale:0}
		const styleEnd = {
								x: spring(360,[1,1]), 
								opacity:spring(1,[1,1]), 
								scale:spring(1, [1,1])
							}
		return (
			
			<div className="results">
				{items.map( (item,index) => {
					return  (
						<Motion key={item.id} defaultStyle={styleDefault} style={styleEnd}>
						{({x, opacity, scale}) => 
							
							<ResultCard 
							item={item} 
							setSearchTerm={setSearchTerm}
							style={{transform: `scale(${scale}) rotate(${x}deg)`}}/>
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


