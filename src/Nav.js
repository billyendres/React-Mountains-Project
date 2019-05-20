import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Nav extends Component {
	render() {
		//Map Over all Links and return in NavBar
		const mountainLinks = this.props.mountains.map(mountain => (
			<li className="nav-item" key={mountain.id}>
				<NavLink to={`/mountains/${mountain.id}`} className="nav-link">
					{mountain.name}
				</NavLink>
			</li>
		));
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<NavLink to="/mountains" className="navbar-brand">
					Mountains
				</NavLink>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarText"
					aria-controls="navbarText"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarText">
					<ul className="navbar-nav mr-auto">{mountainLinks}</ul>
				</div>
			</nav>
		);
	}
}

export default Nav;
