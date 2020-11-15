import 'react-native-gesture-handler';
import React from 'react';
import { } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Cities, Stores, Restaurant } from './pages';

const Stack = createStackNavigator();

const Router = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Cities'
                screenOptions={{ gestureEnabled: true, headerShown: false }}>
                <Stack.Screen name="Cities" component={Cities} />
                <Stack.Screen name="Stores" component={Stores} />
                <Stack.Screen name="Restaurant" component={Restaurant} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};


export default Router;