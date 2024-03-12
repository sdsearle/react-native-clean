import React from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../res/Styles';
import {ScarvViewModel} from './ScarvViewModel';

export function ScarvView({navigation}) {
  const vm = ScarvViewModel();
  return (
    <View style={{flex: 1}}>
      <View style={styles.centered}>
        <Text style={styles.sectionTitle}>Current Count {vm.state.count}</Text>
        <Button title="Reset" onPress={vm.reset} />
        <Button
          title="Go to Pokemon"
          onPress={() => navigation.navigate('Pokemon')}
        />
      </View>
      <TouchableOpacity style={styles.fab} onPress={vm.incrementCount} />
    </View>
  );
}
