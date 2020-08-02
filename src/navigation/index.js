import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {OnBoarding} from '../screens/OnBoarding';
import {Home} from '../screens/Home';

const Stack = createStackNavigator();

function Nav() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{stackAnimation: 'fade', headerShown: false}}>
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Nav;
