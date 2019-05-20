import React, { Component } from "react";
import "./MountainList.css";

class MountainList extends Component {
	render() {
		return (
			<div className="MountainList">
				<h1 className="display-1 text-center">Mountain list</h1>
				<div className="container">
					<div className="row">
						{this.props.mountains.map(mountain => (
							<div className="Mountain col-lg-6 text-center" key={mountain.name}>
								<img src={mountain.src} alt={mountain.name} />
								<h3>{mountain.name}</h3>
							</div>
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default MountainList;
