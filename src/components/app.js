import React from 'react';
import Results from './results';
import SearchBar from './searchBar';

const App = () => {
    return (
    	<div>
      	<header className="header">
  				<h4>Pixabay Image Search</h4>
  				<h6>using React, Redux and react-motion</h6>
  				<SearchBar />
  		  </header>
      	<Results />
      	</div>
    )
}

export default App

