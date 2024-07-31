import React, {useContext, useEffect, useRef} from 'react';
import {Button, FlatList, Text, TouchableOpacity, View} from 'react-native';
import {dimenen} from '../res/dimen';
import {PokemonColors} from '../Pokemon/PokemonColors';
import {usePokeVM} from './CleanPokeVM';
import {getTextColor, styles} from '../res/Styles';
import {PokeProvider} from '../Pokemon/PokeProvider';
import {PokeRepoContext, PokeRepoProvider} from './CleanPokeRepo';
import {Child} from './Child';
import ChildMemo from './ChildMemo';
import {storage} from '../App';

function MMKVTest(name: string, age: number, info: boolean) {
  for (let i = 0; i < 100000; i++) {
    storage.set('user.name', name);
    storage.set('user.age', age);
    storage.set('user.name', name + '1');
    storage.set('user.age', age + 1);
  }
  storage.set('is-mmkv-fast-asf', info);
}

export function CleanPokemon() {
  const name = 'Test';
  const age = 20;
  const info = true;
  useEffect(() => {
    async () => {
      setTimeout(() => {
        MMKVTest(name, age, info);
      }, 5000);
    };
    return () => {
      var resolution;
      var StartTime = Date.now();
      MMKVTest(name, age, info);
      var EndTime = Date.now();
      resolution = EndTime - StartTime;
      var resolutionTime = resolution / 1000;
      console.log(resolutionTime);
    };
  });

  useEffect(() => {
    throw 'Deliberate Error!';
  });

  const vm = usePokeVM();
  console.log('Poke render');
  return (
    <View style={{flex: 1}}>
      <View>
        <FlatList
          contentContainerStyle={{margin: dimenen.xs}}
          ListFooterComponentStyle={{paddingEnd: dimenen.ivxl}}
          ListFooterComponent={<View />}
          horizontal={true}
          data={vm.colors}
          renderItem={({item}) => {
            const title: string = item.key;
            return (
              <TouchableOpacity
                style={{
                  margin: dimenen.xs,
                  backgroundColor: item.value,
                }}
                onPress={() => vm.colorButtonHandler(item.key)}>
                <Text
                  style={
                    (styles.sectionTitle,
                    {
                      color: getTextColor(item.value),
                      padding: 16,
                      fontSize: 24,
                    })
                  }>
                  {title}
                </Text>
              </TouchableOpacity>
            );
          }}
          keyExtractor={item => item.key}
        />
      </View>
      {vm.pokemon.l ? (
        <Text style={styles.sectionTitle}>{'...Loading'}</Text>
      ) : (
        <FlatList
          style={{marginBottom: dimenen.s}}
          ListFooterComponentStyle={{
            margin: dimenen.ivxl,
          }}
          ListFooterComponent={<View />}
          horizontal={false}
          data={vm.pokemon.filteredPokemon}
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
      )}
      <Child />
      <ChildMemo isMemo={true} />
    </View>
  );
}
