import React from 'react';
import {Button, FlatList, ScrollView, View} from 'react-native';
import {PokemonColors} from './PokemonColors';
import {styles} from '../res/Styles';

export function PokeListView({navigation}) {
  return (
    <View style={{flex: 1}}>
      <FlatList
        contentContainerStyle={{margin: 16, flex: 1}}
        style={{flexGrow: 0}}
        horizontal={true}
        data={PokemonColors}
        renderItem={({item}) => {
          const title: string = item.key;
          return (
            <View style={{paddingStart: 8}}>
              <Button color={item.value} title={title} />
            </View>
          );
        }}
        keyExtractor={item => item.key}
      />
      <FlatList
        contentContainerStyle={{margin: 16}}
        style={{flexGrow: 0}}
        horizontal={true}
        data={PokemonColors}
        renderItem={({item}) => {
          const title: string = item.key;
          return (
            <View style={{paddingStart: 8}}>
              <Button color={item.value} title={title} />
            </View>
          );
        }}
        keyExtractor={item => item.key}
      />
    </View>
  );
}
