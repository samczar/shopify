import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import CartList from '../components/CartList'

export const CartScreen = () => {
	return (
		<View style={styles.container}>
			<Text>Cart</Text>
			<CartList />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})

export default CartScreen
