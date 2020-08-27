import { Product } from '../types/Product'

export const addItemsToCart = (
	cartItems: Product[],
	cartItemToBeAdded: Product
) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.name === cartItemToBeAdded.name
	)

	if (existingCartItem) {
		return cartItems.map((cartItem: Product) => {
			return cartItem.name === cartItemToBeAdded.name
				? { ...cartItem, quantity: (cartItem.quantity || 0) + 1 }
				: cartItem
		})
	}

	return [...cartItems, { ...cartItemToBeAdded, quantity: 1 }]
}
