import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {Cities} from './pages';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Cities" component={Cities} />
                <Stack.Screen name="Stores" component={null} />
                <Stack.Screen name="Restaurant" component={null} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};


export default Router;