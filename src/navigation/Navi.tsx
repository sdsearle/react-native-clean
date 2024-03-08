import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ExampleOther} from '../ExampleOther/ExampleOther';
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
        <Stack.Screen name="Profile" component={ExampleOther} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
