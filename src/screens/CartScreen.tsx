import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'

export const CartScreen = () => {
	return (
		<View style={styles.container}>
			<Text>Cart</Text>
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

const mapStateToProps = (state: any) => ({
	state: null,
})

const mapDispatchToProps = {
	return: null,
}

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen)
