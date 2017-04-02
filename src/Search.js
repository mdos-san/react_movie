import React, { Component } from 'react';

import Detail 				from './Detail.js';
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
		if (this.state.details !== undefined)
			return (
				<div className="box">
					<button className="button" onClick={() => (this.goBack())}>Go Back</button>
					<br/><br/>
					<Detail obj={this.state.details} />
				</div>
			);
		else if (this.state.r === undefined)
			return (
				<div className="box">
					<h2>Search</h2>
					<input onChange={this.searchApi} type="text" placeholder="Search a movie..."/>
				</div>
			);
		else
			return (
				<div className="box">
					<h2>Search</h2>
					<input className="input" onChange={this.searchApi} type="text" placeholder="Search a movie..."/>
					<br/><br/>
					<table>
						<tbody>
						{this.state.r.results.map((item) => (
							<tr onClick={() => (this.getDetails(item))} key={item.id}>
								<td>
									<img alt="No poster available"
										src={"http://image.tmdb.org/t/p/w45/"
										+ item.poster_path}/>
								</td>
								<td>{item.title}</td>
								<td>{item.release_date}</td>
							</tr>
						))}
						</tbody>
					</table>
				</div>
			);
	}
}

export default Search;