import React, { Component } from 'react';

import $ from '../public/jquery.js'

class Latest extends Component {
	constructor(props) {
		super(props);
		this.apiKey = "07b26d975afb0480ef4b4c33e129c700";
		this.settings = {
			method:	"GET",
			url:	"https://api.themoviedb.org/3/movie/latest?api_key=" + this.apiKey
		};
		$.ajax(this.settings).then(function (response) {
			console.log(response);
		});
	}
	render() {
		return (
			<div>
			<h2>Latest working!</h2>
			</div>
		);
	}
}

export default Latest;