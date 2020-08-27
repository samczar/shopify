import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { TouchableOpacity } from 'react-native'

import { store, persiststore } from './src/redux/store'
import { HomeScreen } from './src/screens/HomeScreen'
import { CheckOutScreen } from './src/screens/CheckOutScreen'
import { ShoppingCartIcon } from './src/components/ShoppingCartIcon'

const Stack = createStackNavigator()

export default function App(props: any) {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persiststore}>
				<StatusBar />
				<NavigationContainer>
					<Stack.Navigator
						screenOptions={({ navigation }) => ({
							headerRight: () => (
								<TouchableOpacity onPress={() => navigation.navigate('Cart')}>
									<ShoppingCartIcon {...props} />
								</TouchableOpacity>
							),
						})}
					>
						<Stack.Screen name="Home" component={HomeScreen} />
						<Stack.Screen name="Cart" component={CheckOutScreen} />
					</Stack.Navigator>
				</NavigationContainer>
			</PersistGate>
		</Provider>
	)
}
