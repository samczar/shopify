import React from 'react'
import { Product } from '../redux/types/Product'
import { View, Text } from 'react-native'

const ProductComponent = ({ name, price, quantity }: Product) => (
	<View style={{ padding: 20 }}>
		<Text>
			{name} - &#36;{price} {quantity ? ` (x ${quantity}) ` : null}{' '}
			{quantity ? price * quantity : null}
		</Text>
	</View>
)

export default ProductComponent
