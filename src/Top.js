import React, { Component } from 'react';

import Detail 				from './Detail.js';
import $					from '../public/jquery.js'

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
		if (this.state.details !== undefined)
			return (
				<div>
					<button onClick={() => (this.goBack())}>Go Back</button>
					<Detail obj={this.state.details} />
				</div>
			);
		else if (this.state.r === undefined)
			return (
				<div>
					<h2>Search</h2>
					<input onChange={this.searchApi} type="text" placeholder="Search a movie..."/>
				</div>
			);
		else
			return (
				<div>
					<h2>Top rated movies</h2>
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

export default Top;