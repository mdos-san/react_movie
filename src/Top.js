import React, { Component } from 'react';

import List 				from './List.js';
import $					from '../public/jquery.js';

class Top extends Component {
	constructor() {
		super();
		this.apiKey = "07b26d975afb0480ef4b4c33e129c700";
		this.state = { r: undefined };
		var that = this;
		$.ajax({
			method:	"GET",
			url:	"https://api.themoviedb.org/3/movie/top_rated?api_key=" + that.apiKey
		}).then(function (response) {
			console.log(response);
			that.setState({ r: response });
		});
	}

	getDetails(item) {
		this.setState({
			r: this.state.r,
			details: item
		})
	}

	goBack() {
		this.setState({r: this.state.r, details: undefined});
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
					<h2>Top rated movies</h2>
					<List responses={this.state.r}/>
				</div>
			);
	}
}

export default Top;