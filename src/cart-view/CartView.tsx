import React from 'react';
import {LicensePlate} from '../license-plate/LicensePlate';
import {Jumbotron} from '../jumbotron/Jumbotron';
import { CurrencyInfo, LicensePlateData } from '../license-plate-data.type';
import { useCart } from '../cart-service/cart-hook';

type CartViewProps = {
	currencyInfo: CurrencyInfo
}

export function CartView(props: CartViewProps) {

	const [cartContents, , removePlateFromCart] = useCart();

	let rows;
	if (cartContents) {
		rows = (cartContents as LicensePlateData[]).map((licensePlate: LicensePlateData, index: number) => {
					return (
			<div key={licensePlate._id} className="col-md-4" style={{backgroundColor: (index % 2 === 0) ? '#F5F5F5' : ''}}>
					<LicensePlate onButtonClicked={removePlateFromCart} currencyInfo={props.currencyInfo} plate={licensePlate} buttonText="Remove from cart &times;" />
				</div>
			);
		});
	}
	return (
		<>
			<Jumbotron title="My Cart" description="Your current cart contents:"/>
			<div className="container">
				{rows && rows.length === 0 && <div className="alert alert-info" role="alert">Your cart is empty</div>}
				<div className="row" >
					{rows}
				</div>
				<hr/>
			</div>
		</>
	);
}
	

