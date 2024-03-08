import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCARV} from '../SCARV/SCARV';
import HomeStart from '../Home/HomeStart';

const Stack = createNativeStackNavigator();

const Navi = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeStart}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={SCARV} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};