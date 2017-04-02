import React, { Component } from 'react';

import Detail 				from './Detail.js';
import $					from '../public/jquery.js'

class Latest extends Component {
	constructor(props) {
		super(props);
		var that = this;
		this.state = {};
		this.apiKey = "07b26d975afb0480ef4b4c33e129c700";
		this.settings = {
			method:	"GET",
			url:	"https://api.themoviedb.org/3/movie/latest?api_key=" + this.apiKey
		};
		$.ajax(this.settings).then(function (response) {
			console.log(response);
			that.setState({ r: response });
			$.ajax({
				method: "GET",
				url:	"https://api.themoviedb.org/3/movie/" + that.state.r.id + "/images?api_key=" + that.apiKey
			}).then(function (response) {
				console.log(response);
				that.setState({
					r: 		that.state.r,
					img:	response.posters.file_path
				});
			});
		});
	}
	
	render() {
		return (
			<div>
				<h2>Latest movie!</h2>
				<Detail obj={this.state.r} img={this.state.img}/>
			</div>
		);
	}
}

export default Latest;