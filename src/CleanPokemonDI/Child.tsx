import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../res/Styles';

export function Child({isMemo = false}) {
  console.log(`ZOL Child Render ${isMemo}`);
  return (
    <View>
      <Text style={styles.sectionTitle}>Text {JSON.stringify(isMemo)}</Text>
    </View>
  );
}
