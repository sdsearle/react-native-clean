import React, {useContext, useEffect, useRef} from 'react';
import {Button, FlatList, Text, TouchableOpacity, View} from 'react-native';
import {dimenen} from '../res/dimen';
import {PokemonColors} from '../Pokemon/PokemonColors';
import {usePokeVM} from './CleanPokeVM';
import {getTextColor, styles} from '../res/Styles';
import {PokeProvider} from '../Pokemon/PokeProvider';
import {Child} from './Child';
import ChildMemo from './ChildMemo';
import {useQuery} from 'react-query';
import {getPokemon} from '../Pokemon/PokemonAPI';

//CustomHook 1 gets 50% of the job done

/****
export function CleanPokemon() {
  const query = useQuery(['currentColor'], () => getPokemon('currentColor'), {
    select: data => {
      data.filter(item => {
        if (item.name.includes('s')) {
          return item;
        }
      });
    },
  });
****/

//CustomHook 2
/*** 
 result = CleanPokemon()
 newreulst = manipulate(result)
*/

export function CleanPokemon() {
  const query = useQuery(['black'], () => getPokemon('black'));
  const query2 = useQuery(['grey'], () => getPokemon('black'));

  const vm = usePokeVM();
  const colorButtonHandler = (color: string) => {
    vm.useGetPokemonOfColor(color);
  };
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
                onPress={() => colorButtonHandler(item.key)}>
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
