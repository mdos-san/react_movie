import React, { Component } from 'react';

import List					from './List.js';
import $					from '../public/jquery.js';

class Up extends Component {
	constructor() {
		super();
		this.apiKey = "07b26d975afb0480ef4b4c33e129c700";
		this.state = { r: undefined };
		var that = this;
		$.ajax({
			method:	"GET",
			url:	"https://api.themoviedb.org/3/movie/upcoming?api_key=" + that.apiKey
		}).then(function (response) {
			console.log(response);
			that.setState({ r: response });
		});
	}

	render() {
		if (this.state.r === undefined)
			return (
				<div className="box">
					<p>Waiting for server response...</p>
				</div>
			);
		else
			return (
				<div className="box">
					<h2>Upcoming movies</h2>
					<List responses={this.state.r}/>
				</div>
			);
	}
}

export default Up;