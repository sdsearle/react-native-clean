import React from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../res/Styles';

export function Home({viewModel, navigation}) {
  return (
    <View style={{flex: 1}}>
      <View style={styles.centered}>
        <Text style={styles.sectionTitle}>Current Count {viewModel.count}</Text>
        <Button
          title="Go to SCARV"
          onPress={() => navigation.navigate('SCARV')}
        />
        <Button
          title="Go to STUVVMS"
          onPress={() => navigation.navigate('STUVVMS')}
        />
        <Button
          title="Go to Clean"
          onPress={() => navigation.navigate('Clean')}
        />
      </View>
      <TouchableOpacity style={styles.fab} onPress={viewModel.updateCount} />
    </View>
  );
}
