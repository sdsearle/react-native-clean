import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ExampleHome from '../ExampleHome/ExampleHome';
import ExampleOther from '../ExampleOther/ExampleOther';

const Stack = createNativeStackNavigator();

const Navi = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ExampleHome}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={ExampleOther} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
