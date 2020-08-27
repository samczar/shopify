import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persiststore } from './src/redux/store'
import { HomeScreen } from './src/screens/HomeScreen'
import { CartScreen } from './src/screens/CartScreen'
import { ShoppingCartIcon } from './src/components/ShoppingCartIcon'

const Stack = createStackNavigator()

export default function App() {
	return (
		<Provider store={store}>
			<PersistGate persistor={persiststore}>
				<StatusBar />
				<NavigationContainer>
					<Stack.Navigator>
						<Stack.Screen
							name="Home"
							component={HomeScreen}
							options={{
								headerRight: (props) => <ShoppingCartIcon {...props} />,
							}}
						/>
						<Stack.Screen
							name="Cart"
							component={CartScreen}
							options={{
								headerRight: (props) => <ShoppingCartIcon {...props} />,
							}}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</PersistGate>
		</Provider>
	)
}
