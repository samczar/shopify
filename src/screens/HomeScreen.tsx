import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

import ProductList from '../components/ProductList'

export const HomeScreen = ({ navigation }: any) => {
	return (
		<View style={styles.container}>
			<ProductList />
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
