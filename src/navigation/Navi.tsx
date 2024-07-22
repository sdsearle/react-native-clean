import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCARV} from '../SCARV/SCARV';
import HomeStart from '../Home/HomeStart';
import {Pokemon} from '../Pokemon/Pokemon';
import ViewStart from '../STUVVMA/ViewStart';
import {CleanPokemonDI} from '../CleanPokemonDI/CleanPokemonDI';
import {CleanPokemonDIStart} from '../CleanPokemonDI/CleanPokemonDIStart';
import {CleanPokemonStart} from '../CleanPokemon/CleanPokemonStart';

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
        <Stack.Screen name="CleanPokemonDI" component={CleanPokemonDIStart} />
        <Stack.Screen name="CleanPokemonStart" component={CleanPokemonStart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
