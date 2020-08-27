import React from 'react'
import { View, StyleSheet, Button } from 'react-native'

import ProductList from '../components/ProductList'

export const HomeScreen = (props: any) => {
	return (
		<View style={styles.container}>
			<View style={styles.product}>
				<ProductList {...props} />
			</View>
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
	product: {
		paddingTop: 30,
	},
})
