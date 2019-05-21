import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MountainList.css";

class MountainList extends Component {
	render() {
		return (
			<div className="MountainList">
				<div className="row">
					{this.props.mountains.map(mountain => (
						<div
							className="Mountain col-lg-6 col-md-12 text-center my-3"
							key={mountain.name}
						>
							<img src={mountain.src} alt={mountain.name} />
							<h3>
								<Link className="underline" to={`/mountains/${mountain.id}`}>
									{mountain.name}
								</Link>
							</h3>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default MountainList;
