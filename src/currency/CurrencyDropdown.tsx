/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FunctionComponent } from 'react';
import './CurrencyDropdown.css';
import { Currency } from '../license-plate-data.type';

type CurrencyDropdownProps = {
	currency: Currency,
	onCurrencyChange: (currency: Currency) => void
}

export const CurrencyDropdown: FunctionComponent<CurrencyDropdownProps> = (props) => {

	const [showItems, setShowItems] = React.useState<boolean>(false);

		return (
			<div className="btn-group margin10">
				<button type="button" onClick={() => setShowItems(true)}
					className="btn btn-info dropdown-toggle" data-toggle="dropdown">
					{props.currency}
				</button>
				<div className={showItems? "dropdown-menu show" : "dropdown-menu"}>
					<a className="dropdown-item" onClick={() => {
						setShowItems(false);
						props.onCurrencyChange("USD");
					}}>
						USD ($)
					</a>
					<a className="dropdown-item" onClick={() => {
						setShowItems(false);
						props.onCurrencyChange("EUR");
					}}>
						EUR (€)
					</a>
					<a className="dropdown-item" onClick={() => {
						setShowItems(false);
						props.onCurrencyChange("GBP");
					}}>
						GBP (£)
					</a>
				</div>
			</div>
		);
};
