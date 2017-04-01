import React from 'react';
import { connect } from 'react-redux';
import { setSearchTerm, selectResult } from '../actions/index';
import { Motion, spring } from 'react-motion';
import ResultCard from './ResultCard';

class Results extends React.Component {

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

const mapStateToProps = (state) => {
	return { 
		items: state.items.all ,
		searchTerm: state.searchTerm
	};
}

export default connect ( mapStateToProps, {selectResult, setSearchTerm}) (Results);


