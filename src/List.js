import React, { Component } from 'react';

import Detail from './Detail';

class List extends Component {
	constructor() {
		super();
		this.state = {};
	}

	goBack() {
		this.setState({ details: undefined });
	}
	getDetails(item) {
		this.setState({ details: item });
	}

	render() {
		if (this.state.details !== undefined)
			return (
				<div className="box">
					<button className="button" onClick={() => (this.goBack())}>GO BACK</button>
					<br/><br/>
					<Detail obj={this.state.details} />
				</div>
			);
		else
			return (
				<div>
					<h3>List</h3>
					<table className="m_m_a m_ta_c">
						<thead>
							<tr>
								<th>Poster</th>
								<th>Title</th>
								<th>Realease date</th>
								<th>Note</th>
								<th>Popularity</th>
							</tr>
						</thead>
						<tbody>
						{this.props.responses.results.map((item) => (
							<tr className="m_cs_pt" onClick={() => (this.getDetails(item))} key={item.id}>
								<td>
									<img alt="No poster available"
										src={"http://image.tmdb.org/t/p/w45/"
										+ item.poster_path}/>
								</td>
								<td>{item.title}</td>
								<td className="notice notice--black">{item.release_date}</td>
								<td className="notice">{item.vote_average}</td>
								<td className="notice notice--blue">{item.popularity}</td>
							</tr>
						))}
						</tbody>
					</table>
				</div>
			);
	}
}

export default List;