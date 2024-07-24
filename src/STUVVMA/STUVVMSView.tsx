import React, {Button, Text, View} from 'react-native';
import {styles} from '../res/Styles';
import useStuvvmsViewModel from './STUVVMSViewModel';

const StuvvmsView = () => {
  const {count, increment, navToPokemon} = useStuvvmsViewModel();

  return (
    <View style={styles.centered}>
      <Text style={styles.sectionTitle}>{count}</Text>
      <Button title="Increment" onPress={increment} />
      <Button title="Go to Pokemon" onPress={navToPokemon} />
    </View>
  );
};

export default StuvvmsView;
