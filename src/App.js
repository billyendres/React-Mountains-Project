import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import MountainList from "./MountainList";
import MountainInfo from "./MountainInfo";
import Nav from "./Nav";

import whistler from "./images/whistler.jpg";
import parkCity from "./images/parkCity.jpg";
import sunshine from "./images/sunshine.jpg";
import thredbo from "./images/thredbo.jpg";

class App extends Component {
	static defaultProps = {
		mountains: [
			{
				name: "Whistler",
				id: "whistler",
				location: "British Columbia, CA",
				src: whistler,
				facts: [
					"Whistler Blackcomb is a ski resort located in Whistler, British Columbia, Canada. By many measures it is the largest ski resort in North America and has the greatest uphill lift capacity. It features the Peak 2 Peak Gondola for moving between Whistler and Blackcomb mountains at the top. With all of this capacity, Whistler Blackcomb is also often the busiest ski resort, often besting 2 million visitors a year."
				]
			},
			{
				name: "Sunshine Village",
				id: "sunshine-village",
				location: "Alberta, CA",
				src: sunshine,
				facts: [
					"Sunshine Village is a Canadian ski resort, located on the Continental Divide of the Canadian Rockies within Banff National Park in Alberta and Mt Assiniboine Provincial Park in British Columbia, Canada. It is one of three major ski resorts located in the Banff National Park."
				]
			},
			{
				name: "Park City",
				id: "park-city",
				location: "Utah, USA",
				src: parkCity,
				facts: [
					"Park City is a city in Summit County, Utah, United States. It is considered to be part of the Wasatch Back. The city is 32 miles (51 km) southeast of downtown Salt Lake City and 20 miles (32 km) from Salt Lake City's east edge of Sugar House along Interstate 80. "
				]
			},
			{
				name: "Thredbo",
				id: "thredbo",
				location: "NSW, Australia",
				src: thredbo,
				facts: [
					"Thredbo is a village and ski resort in the Snowy Mountains of New South Wales, Australia, and a part of the Snowy Monaro Regional Council. It is about 500 kilometres south of Sydney, accessible by the Alpine Way via Cooma, Berridale, and Jindabyne."
				]
			}
		]
	};
	render() {
		const getMountain = props => {
			let id = props.match.params.id;
			let currentMountain = this.props.mountains.find(
				mountain => mountain.id.toLowerCase() === id.toLowerCase()
			);
			return <MountainInfo {...props} mountain={currentMountain} />;
		};
		return (
			<div>
				<Nav mountains={this.props.mountains} />
				<Switch>
					<Route
						exact
						path="/mountains"
						render={() => <MountainList mountains={this.props.mountains} />}
					/>
					<Route exact path="/mountains/:id" render={getMountain} />
				</Switch>
			</div>
		);
	}
}

export default App;
