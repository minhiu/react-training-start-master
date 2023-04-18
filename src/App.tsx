import React from 'react';
import './App.css';
import { Navigation } from './navigation/Navigation';
import { Jumbotron } from './jumbotron/Jumbotron';
import { LicensePlate } from './license-plate/LicensePlate';
import { CALIFORNIA_PLATE, LICENSE_PLATES } from "./mock-data";

export class App extends React.Component {

	name = 'React';

	render() {
		return (
			<div className="App">
				<header className="App-header">
				</header>
				<Navigation />
				<main role="main">
					<Jumbotron title="Welcome to our store" description="Browse our collection of license plates"/>
					<div className="container">
						<div className="row" >
							{LICENSE_PLATES.map((licensePlate, index) => (
							<div key={licensePlate._id} className={(index % 2 === 0) ? "alternateBackgroundColor col-md-4" : "col-md-4"}>
								<LicensePlate plate={licensePlate} buttonText="Add to cart"/>
							</div>
							))}
						</div>
					</div>
				</main>
			</div>
		);
	}
};
