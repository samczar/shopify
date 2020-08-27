import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, Text, StyleSheet, FlatList, Button } from 'react-native'

import { loadData, addProductToCart } from '../redux/action/action'
import ProductComponent from './ProductComponent'
import { AppState } from '../redux/store'

const ProductList = ({ navigation }: any) => {
	const products = useSelector((state: AppState) => state.products.data)
	const Dispatch = useDispatch()

	useEffect(() => {
		Dispatch(loadData())
	})

	return (
		<View style={styles.container}>
			<Text>ProductList</Text>
			<FlatList
				data={products}
				keyExtractor={(product) => product.name}
				renderItem={({ item }) => {
					return (
						<View>
							<ProductComponent name={item.name} price={item.price} />

							<Button
								onPress={() => {
									Dispatch(addProductToCart(item))
								}}
								title="Add To Cart"
								color="#841584"
								accessibilityLabel="Add To Cart"
							/>
						</View>
					)
				}}
			/>
			<View style={{ position: 'absolute', bottom: 200 }}>
				<Button
					onPress={() => navigation.navigate('Cart')}
					title="Go To Cart"
					color="#841584"
					accessibilityLabel="Cart"
				/>
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
})

export default ProductList
