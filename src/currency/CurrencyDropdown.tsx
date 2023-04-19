/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FunctionComponent } from 'react';
import './CurrencyDropdown.css';
import { Currency } from '../license-plate-data.type';

export const CurrencyDropdown: FunctionComponent<{}> = () => {

	const [showItems, setShowItems] = React.useState<boolean>(false);
	const [currency, setCurrency] = React.useState<Currency>("USD");

		return (
			<div className="btn-group margin10">
				<button type="button" onClick={() => setShowItems(true)}
					className="btn btn-info dropdown-toggle" data-toggle="dropdown">
					{currency}
				</button>
				<div className={showItems? "dropdown-menu show" : "dropdown-menu"}>
					<a className="dropdown-item" onClick={() => {
						setShowItems(false);
						setCurrency("USD");
					}}>
						USD ($)
					</a>
					<a className="dropdown-item" onClick={() => {
						setShowItems(false);
						setCurrency("EUR");
					}}>
						EUR (€)
					</a>
					<a className="dropdown-item" onClick={() => {
						setShowItems(false);
						setCurrency("GBP");
					}}>
						GBP (£)
					</a>
				</div>
			</div>
		);
};
