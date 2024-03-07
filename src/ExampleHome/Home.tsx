import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../res/Styles';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export function Home({viewModel}) {
  return (
    <View style={{flex: 1}}>
      <View style={styles.centered}>
        <Text style={styles.sectionTitle}>Current Count {viewModel.count}</Text>
      </View>
      <TouchableOpacity style={styles.fab} onPress={viewModel.updateCount} />
    </View>
  );
}
