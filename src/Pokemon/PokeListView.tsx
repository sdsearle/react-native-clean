import React from 'react';
import {Button, FlatList, ScrollView, Text, View} from 'react-native';
import {PokemonColors} from './PokemonColors';
import {styles} from '../res/Styles';
import {PokeViewModel} from './PokeViewModel';
import {dimenen} from '../res/dimen';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export function PokeListView({navigation}) {
  const vm = PokeViewModel();
  return (
    <View style={{flexGrow: 1}}>
      <FlatList
        style={{marginBottom: dimenen.s}}
        contentContainerStyle={{margin: dimenen.m}}
        ListFooterComponentStyle={{paddingEnd: dimenen.ivxl}}
        ListFooterComponent={<View />}
        horizontal={true}
        data={PokemonColors}
        renderItem={({item}) => {
          const title: string = item.key;
          return (
            <View
              style={{
                paddingStart: dimenen.xs,
                minHeight: dimenen.ivxl,
                flex: 1,
                backgroundColor: 'fff',
              }}>
              <Button
                color={item.value}
                title={title}
                onPress={() => vm.getPokemon(item.key)}
              />
            </View>
          );
        }}
        keyExtractor={item => item.key}
      />
      <FlatList
        style={{marginBottom: dimenen.s}}
        ListFooterComponentStyle={{
          margin: dimenen.ivxl,
        }}
        ListFooterComponent={<View />}
        horizontal={false}
        data={vm.state.pokemon}
        renderItem={({item, index}) => {
          const color = 180 / (index % 2) + 100;
          return (
            <View
              style={{
                paddingStart: dimenen.xs,
                backgroundColor: `rgba(${color}, ${color}, ${color}, 1)`,
              }}>
              <Text style={styles.sectionTitle}>{item.name}</Text>
            </View>
          );
        }}
        keyExtractor={item => item.name}
      />
    </View>
  );
}
