import React, { Component } from 'react';

import Results from './results';
import SearchBar from './search-bar';

export default class App extends Component {
  render() {
    return (
    	<div>
    		<SearchBar />
      		<Results />
      	</div>
    );
  }
}
