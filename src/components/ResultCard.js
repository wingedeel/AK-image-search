import React from 'react';
import ResultTags from './ResultTags';

const ResultCard = ( {item, setSearchTerm, style} ) => { 
	return(
		<div className="result-card" key={item.id} item={item} style={style}>
			<img src={item.webformatURL} alt={item.id} />
				<ResultTags tags={item.tags} setSearchTerm={setSearchTerm}/>
		</div>
	)
}

export default ResultCard
