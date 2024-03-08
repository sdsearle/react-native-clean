import React, {useContext} from 'react';
import {ExampleHomeRepoContext} from './ExampleHomeRepo';
import {Text, Button, View, TouchableOpacity} from 'react-native';
import {styles} from '../res/Styles';

export default ({navigation}) => {
  const {count, setCount} = useContext(ExampleHomeRepoContext);

  return (
    <View style={{flex: 1}}>
      <View style={styles.centered}>
        <Text style={styles.sectionTitle}>Current Count: {count}</Text>
        <Button
          title="Go to Other"
          onPress={() => navigation.navigate('Other')}
        />
      </View>
      <TouchableOpacity
        style={styles.fab}
        onPress={() => {
          setCount(count + 1);
        }}
      />
    </View>
  );
};
