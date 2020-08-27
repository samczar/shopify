import React from 'react'
import { View, Text, FlatList, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { AppState } from '../redux/store'
import { removeProductFromCart } from '../redux/action/action'
import ProductComponent from './ProductComponent'
import {
	getAllCartItem,
	subtotalSelector,
} from '../redux/selectors/selectedItem'

const CartList = () => {
	const Dispatch = useDispatch()

	const cart = useSelector((state: AppState) => getAllCartItem(state))

	const total = useSelector((state: AppState) => subtotalSelector(state))

	const hasItem = cart.length > 0
	const display = hasItem ? (
		<View>
			<FlatList
				data={cart}
				keyExtractor={(cart) => cart.name}
				renderItem={({ item }) => {
					return (
						<View>
							{
								<ProductComponent
									name={item.name}
									price={item.price}
									quantity={item.quantity}
								/>
							}

							<Button
								onPress={() => {
									Dispatch(removeProductFromCart(item))
								}}
								title="Delete Item"
								color="#841584"
								accessibilityLabel="Decrease Item"
							/>
						</View>
					)
				}}
			/>
		</View>
	) : (
		<View>
			<Text>No Data</Text>
		</View>
	)

	return (
		<View>
			{display}
			<Text style={{ padding: 20, fontWeight: 'bold' }}>
				Total Price in Cart: {total}
			</Text>
		</View>
	)
}

export default CartList
