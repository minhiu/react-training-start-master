import React from 'react';
import './App.css';
import { Navigation } from './navigation/Navigation';
import { Jumbotron } from './jumbotron/Jumbotron';
import { LicensePlate } from './license-plate/LicensePlate';
import { LicensePlateData } from './license-plate-data.type';
import { Spinner } from './spinner/Spinner';
import { CheckoutForm } from './checkout-form/CheckoutForm';

type AppState = {
  licensePlates: LicensePlateData[],
  isLoading: boolean
}

export class App extends React.Component<{}, AppState> {
  state = {
    licensePlates: [],
    isLoading: true
  };
	name = 'React';

	async componentDidMount(): Promise<void> {
		const response = await fetch("http://localhost:8000/data")
		const data = await response.json();
    this.setState({ licensePlates: data, isLoading: false });
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
				</header>
				<Navigation />
				<main role="main">
					<Jumbotron title="Welcome to our store" description="Browse our collection of license plates"/>
					<div className="container">
            <CheckoutForm />
						<div className="row" >
							{
								this.state.isLoading ? 
                  <div className='mx-auto'>
                      <Spinner />
                  </div> :
									this.state.licensePlates.map((licensePlate: LicensePlateData, index: number) => (
                    <div key={licensePlate._id} className={`col-md-4 ${(index % 2 === 0) && "alternate-plate-background"}`}>
                      <LicensePlate plate={licensePlate} buttonText="Add to cart"/>
                    </div>
                  ))
	            }
						</div>
					</div>
				</main>
			</div>
		);
	}
};
