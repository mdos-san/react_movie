import React, { Component } from 'react';

import Latest from './Latest'
import Search from './Search'

class App extends Component {
	constructor() {
		super();
		this.state = { view: "Latest" };
		this.header = 
			<div>
				<a href="#" onClick={() => (this.setView('Latest'))}>Latest</a>
				&nbsp;
				<a href="#" onClick={() => (this.setView('Search'))}>Search</a>
			</div>;
	}
	render() {
		if (this.state.view === "Latest")
			return (
				<div>
					{this.header}
					<Latest/>
				</div>
			);
		else if (this.state.view === "Search")
			return (
				<div>
					{this.header}
					<Search/>
				</div>
			);
		else
			return (<div> {this.header} </div>);
	}

	setView(view) { this.setState({ view: view }); }
}

export default App;
