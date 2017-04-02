import React, { Component } from 'react';

class Detail extends Component {
	constructor(props) {
		super(props);
		this.props = props;
		console.log(this.props.obj);
	}
	render() {
		if (this.props.obj === undefined)
			return (
				<div>
					<h3>Waiting for server response...</h3>
				</div>
			);
		else
			return (
				<div>
					<h3>{this.props.obj.title}</h3>
					<img alt="No poster available" src={this.props.img}/>
					<p>{this.props.obj.overview}</p>
				</div>
			);
	}
}

export default Detail;