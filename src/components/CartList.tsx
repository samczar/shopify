import React from 'react'
import { View, Text, FlatList, Button, SafeAreaView } from 'react-native'
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
		<SafeAreaView>
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
									title="Remove"
									color="#841584"
									accessibilityLabel="Decrease Item"
								/>
							</View>
						)
					}}
				/>

				<Text style={{ padding: 20, fontWeight: 'bold' }}>
					Total Price in Cart: ${total}
				</Text>
			</View>
		</SafeAreaView>
	) : (
		<View>
			<Text style={{ padding: 20, fontWeight: 'bold', fontSize: 20 }}>
				Add Product To Cart
			</Text>
		</View>
	)

	return <View>{display}</View>
}

export default CartList
