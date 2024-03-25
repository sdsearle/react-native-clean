import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCARV} from '../SCARV/SCARV';
import HomeStart from '../Home/HomeStart';
import {Pokemon} from '../Pokemon/Pokemon';
import ViewStart from '../STUVVMA/ViewStart';

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
        <Stack.Screen name="SCARV" component={SCARV} />
        <Stack.Screen name="Pokemon" component={Pokemon} />
        <Stack.Screen name="STUVVMS" component={ViewStart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
