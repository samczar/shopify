import { createSelector } from 'reselect'
import _ from 'lodash'

import { AppState } from '../store'
import { Product } from '../types/Product'

const cartSelector = (state: AppState) => state.products.cart

const getCartsItems = (selectedItems: Product[]) => {
	return selectedItems
}

export const subtotalSelector = createSelector(
	cartSelector,
	(items: Product[]) =>
		items
			.reduce((acc, item) => acc + item.price * (item.quantity || 0), 0)
			.toFixed(2)
)

export const totalItemInCart = createSelector(
	cartSelector,
	(items: Product[]) =>
		items.reduce((acc, item) => acc + (item.quantity || 0), 0)
)

export const getAllCartItem = createSelector(cartSelector, getCartsItems)
