import React from "react";
import { Jumbotron } from "../jumbotron/Jumbotron";
import { CurrencyInfo, LicensePlateData } from "../license-plate-data.type";
import { LicensePlate } from "../license-plate/LicensePlate";
import { Spinner } from "../spinner/Spinner";

type StoreViewProps = {
  currencyInfo: CurrencyInfo
}

type StoreViewState = {
  licensePlates: LicensePlateData[],
  isLoading: boolean
}

export class StoreView extends React.Component<StoreViewProps, StoreViewState> {

  state = {
    licensePlates: [],
    isLoading: true
  };
    
  async componentDidMount(): Promise<void> {
    const response = await fetch("http://localhost:8000/data")
    const data = await response.json();
    this.setState({ licensePlates: data, isLoading: false });
  }

  render() {
    return (
      <main role="main">
					<Jumbotron title="Welcome to our store" description="Browse our collection of license plates"/>
					<div className="container">
						<div className="row" >
							{
								this.state.isLoading ? 
                  <div className='mx-auto'>
                      <Spinner />
                  </div> :
									this.state.licensePlates.map((licensePlate: LicensePlateData, index: number) => (
                    <div key={licensePlate._id} className={`col-md-4 ${(index % 2 === 0) && "alternate-plate-background"}`}>
                      <LicensePlate plate={licensePlate} currencyInfo={this.props.currencyInfo} buttonText="Add to cart"/>
                    </div>
                  ))
	            }
						</div>
					</div>
				</main>
    )
  }
}