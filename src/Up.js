import React, { Component } from 'react';

import Detail 				from './Detail.js';
import $					from '../public/jquery.js'

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
					<p>Waiting for server response...</p>
				</div>
			);
		else
			return (
				<div className="box">
					<h2>Upcoming movies</h2>
					<table className="m_m_a">
						<tbody>
						{this.state.r.results.map((item) => (
							<tr className="m_cs_pt m_ta_c" onClick={() => (this.getDetails(item))} key={item.id}>
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

export default Up;