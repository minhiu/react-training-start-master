import React from 'react';
import './App.css';
import { Navigation } from './navigation/Navigation';
import { StoreView } from './store-view/StoreView';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartView } from './cart-view/CartView';
import { CheckoutView } from './checkout-view/CheckoutView';
import { Currency, CurrencyInfo } from './license-plate-data.type';

type AppState = {
  currencyInfo: CurrencyInfo,
  exchangeRates: Record<Currency, number>
}
export class App extends React.Component<{}, AppState> {

  state: AppState = {
    currencyInfo:{
      currency: "USD",
      exchangeRate: 1
    },
    exchangeRates: {
      USD: 1,
      EUR: 1,
      GBP: 1
    }
  }

  componentDidMount(): void {
    fetch("http://localhost:8000/rates")
      .then(res => res.json())
      .then(data => {
        this.setState({ exchangeRates: data })
      });
  }

  setCurrency = (currency: Currency) => {
    this.setState(state => ({currencyInfo: {currency, exchangeRate: state.exchangeRates[currency]} }));
  }

	render() {
		return (
			<div className="App">
				<BrowserRouter>
          <Navigation currency={this.state.currencyInfo.currency}
                      onCurrencyChange={this.setCurrency}/>
          <main role="main">
            <Routes>
              <Route path="/" element={<StoreView currencyInfo={this.state.currencyInfo} />}></Route>
              <Route path="/cart" element={<CartView />}></Route>
              <Route path="/checkout" element={<CheckoutView />}></Route>
            </Routes>
          </main>
        </BrowserRouter>
			</div>
		);
	}
};
