import React, {useContext, useEffect, useRef} from 'react';
import {Button, FlatList, Text, TouchableOpacity, View} from 'react-native';
import {dimenen} from '../res/dimen';
import {getTextColor, styles} from '../res/Styles';
import {observer} from '@legendapp/state/react';
import {apiStore, store$} from './PokeStore';

export const LegendPokemon = observer(function LegendPokemon() {
  const pokeStore = store$;
  const pokeResults = apiStore.get();
  console.log(pokeResults);
  const pokeColors = pokeStore.colors;
  const colorButtonHandler = (color: string) => {
    pokeStore.setCurrentColor(color);
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
          data={pokeColors}
          renderItem={({item}) => {
            const title = item.key;
            return (
              <TouchableOpacity
                style={{
                  margin: dimenen.xs,
                  backgroundColor: item.value.get(),
                }}
                onPress={() => colorButtonHandler(item.key.get())}>
                <Text
                  style={
                    (styles.sectionTitle,
                    {
                      color: getTextColor(item.value.get()),
                      padding: 16,
                      fontSize: 24,
                    })
                  }>
                  {title.get()}
                </Text>
              </TouchableOpacity>
            );
          }}
          keyExtractor={item => item.key.get()}
        />
      </View>
      {true ? (
        <Text style={styles.sectionTitle}>{'...Loading'}</Text>
      ) : (
        <FlatList
          style={{marginBottom: dimenen.s}}
          ListFooterComponentStyle={{
            margin: dimenen.ivxl,
          }}
          ListFooterComponent={<View />}
          horizontal={false}
          data={[]}
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
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
});
