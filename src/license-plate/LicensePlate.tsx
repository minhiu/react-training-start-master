/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/alt-text */
import React, {Component} from 'react';
import './LicensePlate.css';
import { CURRENCIES, CurrencyInfo, LicensePlateData } from '../license-plate-data.type';

type LicensePlateProps = {
	plate: LicensePlateData,
	buttonText: string,
	currencyInfo: CurrencyInfo
}

export class LicensePlate extends Component<LicensePlateProps, {}> {

	buttonClicked = () => {
		alert("Plate added to cart");
	}
	
	render() {
		const plate = this.props.plate as LicensePlateData;
		const { currency, exchangeRate } = this.props.currencyInfo;
		return (
			<>
			<h2>
				{plate.title}
				{plate.onSale && <img src={process.env.PUBLIC_URL + "sale.png"} />}
			</h2>
			<img src={plate.picture} className="img-fluid" />
			<p>{plate.description}</p>
			<div>
			<h2 className="float-left">{CURRENCIES[currency]}{(this.props.plate.price / exchangeRate).toFixed(2)}</h2>
			<button onClick={this.buttonClicked} className="btn btn-primary float-right" role="button">
				{this.props.buttonText}
			</button>
			</div>
			</>
		);
	}

}