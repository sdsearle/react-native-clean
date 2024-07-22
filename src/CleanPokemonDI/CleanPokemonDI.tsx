import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {dimenen} from '../res/dimen';
import {usePokeVM} from './CleanPokeVM';
import {getTextColor, styles} from '../res/Styles';
import {Child} from './Child';
import ChildMemo from './ChildMemo';

export function CleanPokemonDI() {
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
      {vm.pokemon.isLoading ? (
        <Text style={styles.sectionTitle}>{'...Loading'}</Text>
      ) : (
        <FlatList
          style={{marginBottom: dimenen.s}}
          ListFooterComponentStyle={{
            margin: dimenen.ivxl,
          }}
          ListFooterComponent={<View />}
          horizontal={false}
          data={vm.pokemon.data ?? []}
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
