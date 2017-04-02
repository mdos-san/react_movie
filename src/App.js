import React, { Component } from 'react';

import Search from './Search'
import Top from './Top'
import Up from './Up'

class App extends Component {
	constructor() {
		super();
		this.state = { view: "Up" };
		this.header = 
			<div>
				<a href="#" onClick={() => (this.setView('Up'))}>Upcoming</a>
				&nbsp;
				<a href="#" onClick={() => (this.setView('Top'))}>Top rated!</a>
				&nbsp;
				<a href="#" onClick={() => (this.setView('Search'))}>Search</a>
			</div>;
	}
	render() {
		if (this.state.view === "Top")
			return (
				<div>
					{this.header}
					<br/>
					<Top/>
				</div>
			);
		else if (this.state.view === "Up")
			return (
				<div>
					{this.header}
					<br/>
					<Up/>
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
