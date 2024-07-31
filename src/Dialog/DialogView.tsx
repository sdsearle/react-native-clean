import React, {useEffect, useState} from 'react';
import {Alert, FlatList, Modal, Pressable, Text, View} from 'react-native';
import {styles} from '../res/Styles';
import {useDialogVM} from './DialogVM';
import {useHideDialogUseCase} from './HideDialogUseCase';
import {DialogModel} from './DialogModel';
import {dimenen} from '../res/dimen';

export function DialogView() {
  const vm = useDialogVM();
  console.log(`Rendering ${vm.dialogs.length} Dialogs`);
  console.log(`Current dialogs ${JSON.stringify(vm.dialogs)}`);

  return (
    <View>
      <FlatList
        horizontal={true}
        data={vm.dialogs}
        renderItem={({item}) => {
          return (
            <Modal
              animationType="slide"
              transparent={true}
              visible={item.visibility}
              onRequestClose={vm.close}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                }}>
                <View style={styles.modalView}>
                  <Text style={styles.sectionTitle}>{item.title}</Text>
                  <Text style={styles.sectionTitle}>{item.description}</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                    }}>
                    <Pressable onPress={() => item.posFun(item.id)}>
                      <Text style={styles.sectionDescription}>
                        {item.positive}
                      </Text>
                    </Pressable>

                    {item.neutral && item.nutralFun && (
                      <Pressable onPress={() => item.nutralFun(item.id)}>
                        <Text style={styles.sectionDescription}>
                          {item.neutral}
                        </Text>
                      </Pressable>
                    )}
                    {item.negative && item.negFun && (
                      <Pressable onPress={() => item.negFun(item.id)}>
                        <Text style={styles.sectionDescription}>
                          {item.negative}
                        </Text>
                      </Pressable>
                    )}
                  </View>
                </View>
              </View>
            </Modal>
          );
        }}
        keyExtractor={item => `${item.id}`}
      />
    </View>
  );
}
