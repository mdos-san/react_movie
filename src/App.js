import React, { Component } from 'react';

import Latest from './Latest'
import Search from './Search'
import Top from './Top'

class App extends Component {
	constructor() {
		super();
		this.state = { view: "Top" };
		this.header = 
			<div>
				<a href="#" onClick={() => (this.setView('Top'))}>Top rated!</a>
				&nbsp;
				<a href="#" onClick={() => (this.setView('Search'))}>Search</a>
				&nbsp;
				<a href="#" onClick={() => (this.setView('Latest'))}>Latest</a>
			</div>;
	}
	render() {
		if (this.state.view === "Latest")
			return (
				<div>
					{this.header}
					<br/>
					<Latest/>
				</div>
			);
		else if (this.state.view === "Top")
			return (
				<div>
					{this.header}
					<br/>
					<Top/>
				</div>
			);
		else if (this.state.view === "Search")
			return (
				<div>
					{this.header}
					<br/>
					<Search/>
				</div>
			);
		else
			return (<div> {this.header} </div>);
	}

	setView(view) { this.setState({ view: view }); }
}

export default App;
