import React from 'react'
import { useSelector } from 'react-redux'
import { View, Text, TouchableOpacity, Button } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import { AppState } from '../redux/store'
import { totalItemInCart } from '../redux/selectors/selectedItem'

export const ShoppingCartIcon = ({ navigation }: any) => {
	const listProduct = useSelector((state: AppState) => totalItemInCart(state))

	return (
		<View style={{ padding: 20 }}>
			<View
				style={{
					position: 'absolute',
					height: 30,
					width: 30,
					borderRadius: 15,
					backgroundColor: 'rgba(95,197,123,0.8)',
					alignItems: 'center',
					justifyContent: 'center',
					right: 15,
					bottom: 20,
					zIndex: 2000,
				}}
			>
				<Text style={{ color: 'white', fontWeight: 'bold' }}>
					{listProduct}
				</Text>
			</View>
			<Icon name="ios-cart" size={50} />
		</View>
	)
}

export default ShoppingCartIcon
