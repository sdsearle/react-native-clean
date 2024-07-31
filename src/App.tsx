import * as React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SCARV} from './SCARV/SCARV';
import {IsDarkMode, backgroundStyle} from './res/Styles';
import HomeStart from './Home/HomeStart';
import {Pokemon} from './Pokemon/Pokemon';
import ViewStart from './STUVVMA/ViewStart';
import {CleanStart} from './Clean/CleanStart';
import {CleanPokemon} from './CleanPokemon/CleanPokemon';
import {CleanPokemonStart} from './CleanPokemon/CleanPokemonStart';
import {QueryClient, QueryClientProvider} from 'react-query';
import {DialogView} from './Dialog/DialogView';
import {DialogProvider} from './Dialog/DialogRepo';
import {enableReactNativeComponents} from '@legendapp/state/config/enableReactNativeComponents';
import {LegendPokemon} from './Legend/LegendPokemon';
import {MMKV} from 'react-native-mmkv';

const Stack = createNativeStackNavigator();
const client = new QueryClient();
export const storage = new MMKV();

enableReactNativeComponents();

function App() {
  return (
    <SafeAreaProvider style={backgroundStyle}>
      <StatusBar
        barStyle={IsDarkMode() ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <QueryClientProvider client={client}>
        <NavigationContainer>
          <DialogProvider>
            <DialogView />
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={HomeStart} />
              <Stack.Screen name="SCARV" component={SCARV} />
              <Stack.Screen name="Pokemon" component={Pokemon} />
              <Stack.Screen name="STUVVMS" component={ViewStart} />
              <Stack.Screen name="Clean" component={CleanStart} />
              <Stack.Screen name="CleanPokemon" component={CleanPokemonStart} />
              <Stack.Screen name="LegendPokemon" component={LegendPokemon} />
            </Stack.Navigator>
          </DialogProvider>
        </NavigationContainer>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}

export default App;
