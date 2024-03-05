import React, {useContext} from 'react';
import {ExampleHomeRepoContext} from './ExampleHomeRepo';
import {View} from 'react-native';

export default () => {
  const {count, setCount} = useContext(ExampleHomeRepoContext);

  return (
    <View style={styles.centered}>
      <Text style={styles.sectionTitle}>Current Count: {count}</Text>
      <Button
        title="Go to Other"
        onPress={() => navigation.navigate('Other')}
      />
    </View>
  );
};
