import { Product } from './Product'

export const LOAD_DATA_REQUEST = 'LOAD_DATA_REQUEST'
export const LOAD_DATA_PRODUCT_SUCCESS = 'LOAD_DATA_PRODUCT_SUCCESS'
export const LOAD_DATA_PRODUCT_ERROR = 'LOAD_DATA_PRODUCT_ERROR'
export const DELETE_CART_ITEM = 'DELETE_CART_ITEM'
export const LIST_CART_ITEMS = 'LIST_CART_ITEMS'
export const SHOW_CART = 'SHOW_CART'
export const ADD_TO_CART = 'ADD_TO_CART'

export interface LoadDataRequest {
	type: typeof LOAD_DATA_REQUEST
}
export interface LoadDataError {
	type: typeof LOAD_DATA_PRODUCT_ERROR
}

export interface LoadProducts {
	type: typeof LOAD_DATA_PRODUCT_SUCCESS
	products: Product[]
}

export interface AddProductToCart {
	type: typeof ADD_TO_CART
	product: Product
}

export interface DeleteItemFromCart {
	type: typeof DELETE_CART_ITEM
	product: Product
}

export type ProductActionTypes =
	| LoadDataRequest
	| LoadDataError
	| LoadProducts
	| AddProductToCart
	| DeleteItemFromCart

export type AppActions = ProductActionTypes
