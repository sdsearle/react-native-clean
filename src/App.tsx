import * as React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ExampleOther} from './ExampleOther/ExampleOther';
import {IsDarkMode, backgroundStyle} from './res/Styles';
import HomeStart from './Home/HomeStart';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaProvider style={backgroundStyle}>
      <StatusBar
        barStyle={IsDarkMode() ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeStart} />
          <Stack.Screen name="Other" component={ExampleOther} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
