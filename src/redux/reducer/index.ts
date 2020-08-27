import { combineReducers } from 'redux'

import { Product } from '../types/Product'
import { ProductActionTypes } from '../types/actionTypes'
import { addItemsToCart } from './utils'

interface IinitialState {
	isLoading: boolean
	data: Product[]
	cart: Product[]
	error: boolean
}

const initialState: IinitialState = {
	isLoading: false,
	data: [],
	cart: [],
	error: false,
}

const productReducer = (
	state: IinitialState = initialState,
	action: ProductActionTypes
): IinitialState => {
	switch (action.type) {
		case 'LOAD_DATA_REQUEST':
			return { ...state, isLoading: true }
		case 'LOAD_DATA_PRODUCT_SUCCESS':
			return { ...state, data: action.products, isLoading: false }
		case 'LOAD_DATA_PRODUCT_ERROR':
			return { ...state, error: true, isLoading: false }

		case 'ADD_TO_CART':
			return {
				...state,

				cart: addItemsToCart(state.cart, action.product),
			}
		case 'DELETE_CART_ITEM':
			return {
				...state,
				cart: state.cart.filter((item) => {
					return item.name !== action.product.name
				}),

				isLoading: false,
			}

		default:
			return state
	}
}

const rootReducer = combineReducers({
	products: productReducer,
})

export default rootReducer
