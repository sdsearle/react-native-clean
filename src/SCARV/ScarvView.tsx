import React from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../res/Styles';
import {useScarvContext} from './ScarvContext';
import {INCREMENT, RESET} from './ScarvAction';

export function ScarvView({navigation}) {
  const {state, dispatch} = useScarvContext();
  return (
    <View style={{flex: 1}}>
      <View style={styles.centered}>
        <Text style={styles.sectionTitle}>Current Count {state.count}</Text>
        <Button title="Reset" onPress={() => dispatch(RESET)} />
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
      <TouchableOpacity
        style={styles.fab}
        onPress={() => {
          dispatch(INCREMENT);
        }}
      />
    </View>
  );
}
