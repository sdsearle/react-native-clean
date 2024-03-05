import React, {useContext} from 'react';
import {ExampleHomeRepoContext} from './ExampleHomeRepo';
import {TouchableOpacity, View} from 'react-native';

export default () => {
  const {count, setCount} = useContext(ExampleHomeRepoContext);

  return (
    <View style={{alignItems: 'flex-end'}}>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: 'rgba(0,0,0,0.2)',
          width: 100,
          height: 100,
          backgroundColor: '#fff',
          borderRadius: 50,
          margin: 20,
        }}
        onPress={() => {
          setCount(count + 1);
        }}
      />
    </View>
  );
};
