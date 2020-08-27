import React from 'react'
import { Product } from '../redux/types/Product'
import { View, Text } from 'react-native'

const ProductComponent = ({ name, price, quantity }: Product) => {
	let convertPrice = parseFloat(Number(price).toFixed(2))
	return (
		<View style={{ padding: 20 }}>
			<Text>
				{name} - &#36;{convertPrice} {quantity ? ` (x ${quantity}) ` : null}{' '}
				{quantity ? `$${(convertPrice * quantity).toFixed(2)}` : null}
			</Text>
		</View>
	)
}
export default ProductComponent
