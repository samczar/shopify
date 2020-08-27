import { Dispatch } from 'redux'

import shop from '../../api/shop'
import { Product } from '../types/Product'
import { AppActions } from '../types/actionTypes'
import { AppState } from '../store'

export const loadData = () => (
	dispatch: Dispatch<AppActions>,
	getState: () => AppState
) => {
	shop.getProducts((products: Product[]) => {
		dispatch({
			type: 'LOAD_DATA_PRODUCT_SUCCESS',
			products,
		})
	}, 100)
}

export const addProductToCart = (product: Product): AppActions => {
	return {
		type: 'ADD_TO_CART',
		product,
	}
}

export const removeProductFromCart = (product: Product): AppActions => {
	return {
		type: 'DELETE_CART_ITEM',
		product,
	}
}

export const listProductInCart = () => {
	return {
		type: 'LIST_CART_ITEMS',
	}
}
