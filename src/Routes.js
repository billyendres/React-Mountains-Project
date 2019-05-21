import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import MountainList from "./MountainList";
import MountainInfo from "./MountainInfo";

class Routes extends Component {
	render() {
		const getMountain = props => {
			let id = props.match.params.id;
			let currentMountain = this.props.mountains.find(
				mountain => mountain.id.toLowerCase() === id.toLowerCase()
			);
			return <MountainInfo {...props} mountain={currentMountain} />;
		};
		return (
			<Switch>
				<Route
					exact
					path="/mountains"
					render={() => <MountainList mountains={this.props.mountains} />}
				/>
				<Route exact path="/mountains/:id" render={getMountain} />
				<Redirect to="/mountains" />
			</Switch>
		);
	}
}

export default Routes;
