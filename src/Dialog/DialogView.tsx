import React, {useState} from 'react';
import {Alert, Modal, Pressable, Text, View} from 'react-native';
import {styles} from '../res/Styles';
import {useDialogVM} from './DialogVM';
import {useHideDialogUseCase} from './HideDialogUseCase';

export function DialogView() {
  const [modalVisible, setModalVisible] = useState(true);
  const vm = useDialogVM().dialogModel;
  console.log(`Rendering ${vm.visibility} ${vm.title}`);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={vm.visibility}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <View style={styles.modalView}>
          <Text style={styles.sectionTitle}>{vm.title}</Text>
          <Text style={styles.sectionTitle}>{vm.description}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <Pressable onPress={() => vm.posFun()}>
              <Text style={styles.sectionDescription}>{vm.positive}</Text>
            </Pressable>

            {vm.neutral && vm.nutralFun && (
              <Pressable onPress={() => vm.nutralFun()}>
                <Text style={styles.sectionDescription}>{vm.neutral}</Text>
              </Pressable>
            )}
            {vm.negative && vm.negFun && (
              <Pressable onPress={() => vm.negFun()}>
                <Text style={styles.sectionDescription}>{vm.negative}</Text>
              </Pressable>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
}
