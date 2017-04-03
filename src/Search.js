import React, { Component } from 'react';

import List 				from './List.js';
import $					from '../public/jquery.js'

class Search extends Component {
	constructor() {
		super();
		this.apiKey = "07b26d975afb0480ef4b4c33e129c700";
		this.searchApi = this.searchApi.bind(this);
		this.state = { r: undefined };
	}

	searchApi(e) {
		if (e.target.value !== "") {
			console.log(e.target.value);
			var that = this;
			$.ajax({
				method:	"GET",
				url:	"https://api.themoviedb.org/3/search/movie?api_key=" + that.apiKey + "&query=" + e.target.value
			}).then(function (response) {
				console.log(response);
				that.setState({ r: response });
			});
		}
	}

	render() {
		if (this.state.r === undefined)
			return (
				<div className="box">
					<h2>Search</h2>
					<input className="input" onChange={this.searchApi} type="text" placeholder="Search for a movie..."/>
				</div>
			);
		else
			return (
				<div className="box">
					<h2>Search</h2>
					<input className="input" onChange={this.searchApi} type="text" placeholder="Search for a movie..."/>
					<br/><br/>
					<List responses={this.state.r}/>
				</div>
			);
	}
}

export default Search;