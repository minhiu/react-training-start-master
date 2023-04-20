import {useEffect, useState} from "react";
import {addToCart, getCartContents, removeFromCart} from "./cart-service";
import { LicensePlateData } from "../license-plate-data.type";

type returnType = 
	[
		cartContents: LicensePlateData[],
		addPlateToCart: (plate: LicensePlateData) => Promise<void>,
		remvoePlateFromCart: (plate: LicensePlateData) => Promise<void>
	];


export function useCart(): returnType {
	const [cartContents, setCartContents] = useState<LicensePlateData[]>([]);

	useEffect(() => {
		refreshCart();
	}, []);

	const refreshCart = () => getCartContents().then(data => setCartContents(data));

	const addPlateToCart = async (plate: LicensePlateData) => {
		await addToCart(plate);
		return refreshCart();
	};

	const removePlateFromCart = async (plate: LicensePlateData) => {
		await removeFromCart(plate);
		return refreshCart();
	};

    return [cartContents, addPlateToCart, removePlateFromCart];
}


