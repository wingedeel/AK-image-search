import React from 'react';
import { Component } from 'react';

import List from '../containers/list';
import ListItemDetail from '../containers/listItem_detail';
import SearchBar from '../containers/search_bar';

export default class App extends Component {
  render() {
    return (
    	<div>
    		<SearchBar />
      		<List />
      	</div>
    );
  }
}
