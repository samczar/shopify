import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'

import store from './src/redux/store'
import { HomeScreen } from './src/screens/HomeScreen'
import { CartScreen } from './src/screens/CartScreen'

const Stack = createStackNavigator()

export default function App() {
	return (
		<Provider store={store}>
			<StatusBar />
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="Home" component={HomeScreen} />
					<Stack.Screen name="Detail" component={CartScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	)
}
