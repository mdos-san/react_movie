import React, { Component } from 'react';

import Search from './Search'
import Top from './Top'
import Up from './Up'

class App extends Component {
	constructor() {
		super();
		this.state = { view: "Up" };
		this.header = 
			<div className="menu">
				<a className="menu__child" href="#" onClick={() => (this.setView('Up'))}>Upcoming</a>
				&nbsp;
				<a className="menu__child" href="#" onClick={() => (this.setView('Top'))}>Top rated!</a>
				&nbsp;
				<a className="menu__child" href="#" onClick={() => (this.setView('Search'))}>Search</a>
			</div>;
	}

	setView(view) { this.setState({ view: view }); }

	render() {
		if (this.state.view === "Top")
			return (
				<div>
					{this.header}
					<br/>
					<div className="content">
						<Top/>
					</div>
				</div>
			);
		else if (this.state.view === "Up")
			return (
				<div>
					{this.header}
					<br/>
					<div className="content">
					<Up/>
				</div>
				</div>
			);
		else if (this.state.view === "Search")
			return (
				<div>
					{this.header}
					<br/>
					<div className="content">
					<Search/>
				</div>
				</div>
			);
		else
			return (<div> {this.header} </div>);
	}
}

export default App;
