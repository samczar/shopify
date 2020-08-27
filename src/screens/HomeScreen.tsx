import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

import ProductList from '../components/ProductList'

export const HomeScreen = ({ navigation }: any) => {
	return (
		<View style={styles.container}>
			<ProductList />
			<Button onPress={() => navigation.navigate('Cart')} title="Cart" />
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
