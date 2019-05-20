import React, { Component } from "react";
import "./MountainInfo.css";
import { Link } from "react-router-dom";

class MountainInfo extends Component {
	render() {
		let { mountain } = this.props;
		return (
			<div className="container">
				<div className="MountainInfo row justify-content-center mt-5">
					<div className="col-11 col-lg-5">
						<div className="MountainInfo-card card">
							<img className="card-img-top" src={mountain.src} alt={mountain.name} />
							<div className="card-body">
								<h2 className="card-title">{mountain.name}</h2>
								<h4 className="card-subtitle text-muted">{mountain.location}</h4>
							</div>
							<ul className="list-group-item">{mountain.facts}</ul>
							<div className="card-body">
								<Link className="btn btn-info" to="/mountains">
									Back To Mountains
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default MountainInfo;
