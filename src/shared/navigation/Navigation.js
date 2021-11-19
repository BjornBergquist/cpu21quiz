import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import navigationPaths from './navigationPaths';

import HomeScreen from '../../screens/HomeScreen';
import GameScreen from '../../screens/GameScreen';

const Stack = createNativeStackNavigator()

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={navigationPaths.homeScreen} component={HomeScreen} />
                <Stack.Screen name={navigationPaths.gameScreen} component={GameScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
