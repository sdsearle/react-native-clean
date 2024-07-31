import React, {useEffect, useRef, useSyncExternalStore} from 'react';
import {Button, FlatList, Text, View} from 'react-native';
import {styles} from '../res/Styles';
import {useCleanVM} from './CleanVM';
import {countStoreRepo, todosStore} from './CountStoreRepo';
import {storage} from '../App';

export function Clean() {
  //console.log('Rendering');
  const info = storage.getBoolean('is-mmkv-fast-asf');
  console.log(`ZOL ${JSON.stringify(info)}`);
  const vm = useCleanVM();
  return (
    <View style={styles.centered}>
      <Text style={styles.sectionTitle}>Store {vm.counter.count}</Text>
      <Text style={styles.sectionTitle}>Clean {vm.cleanCount}</Text>
      <Button
        title="Go To Pokemon"
        onPress={() => {
          vm.goToPokemonClean();
        }}
      />
      <Button
        title="Increment"
        onPress={() => {
          vm.increment();
        }}
      />
      <Button title="Add Todo" onPress={vm.addTodo} />
      <Button title="Launch Dialog" onPress={vm.showDialog} />
      <FlatList
        data={vm.cleanTodos}
        renderItem={({item}) => (
          <Text style={styles.sectionDescription}>{item.text}</Text>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
