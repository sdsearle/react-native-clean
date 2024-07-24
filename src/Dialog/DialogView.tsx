import React, {useEffect, useState} from 'react';
import {Alert, FlatList, Modal, Pressable, Text, View} from 'react-native';
import {styles} from '../res/Styles';
import {useDialogVM} from './DialogVM';
import {useHideDialogUseCase} from './HideDialogUseCase';
import {DialogModel} from './DialogModel';
import {dimenen} from '../res/dimen';

export function DialogView() {
  const [modalVisible, setModalVisible] = useState(true);
  const vm = useDialogVM();
  return (
    <View>
      {vm.dialogs.map((dialog, index) => (
        <Modal
          key={index}
          animationType="slide"
          transparent={true}
          visible={true}
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
              <Text style={styles.sectionTitle}>{dialog.title}</Text>
              <Text style={styles.sectionTitle}>{dialog.description}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                }}>
                <Pressable onPress={() => dialog.posFun()}>
                  <Text style={styles.sectionDescription}>
                    {dialog.positive}
                  </Text>
                </Pressable>

                {dialog.neutral && dialog.nutralFun && (
                  <Pressable onPress={() => dialog.nutralFun()}>
                    <Text style={styles.sectionDescription}>
                      {dialog.neutral}
                    </Text>
                  </Pressable>
                )}
                {dialog.negative && dialog.negFun && (
                  <Pressable onPress={() => dialog.negFun()}>
                    <Text style={styles.sectionDescription}>
                      {dialog.negative}
                    </Text>
                  </Pressable>
                )}
              </View>
            </View>
          </View>
        </Modal>
      ))}
    </View>
  );

  // return (
  //   <View>
  //     <FlatList
  //       horizontal={true}
  //       data={vm.dialogs}
  //       renderItem={({item}) => {
  //         return (
  //           <Modal
  //             animationType="slide"
  //             transparent={true}
  //             visible={item.visibility}
  //             onRequestClose={() => {
  //               Alert.alert('Modal has been closed.');
  //               setModalVisible(!modalVisible);
  //             }}>
  //             <View
  //               style={{
  //                 flex: 1,
  //                 justifyContent: 'center',
  //               }}>
  //               <View style={styles.modalView}>
  //                 <Text style={styles.sectionTitle}>{item.title}</Text>
  //                 <Text style={styles.sectionTitle}>{item.description}</Text>
  //                 <View
  //                   style={{
  //                     flexDirection: 'row',
  //                     justifyContent: 'space-evenly',
  //                   }}>
  //                   <Pressable onPress={() => item.posFun()}>
  //                     <Text style={styles.sectionDescription}>
  //                       {item.positive}
  //                     </Text>
  //                   </Pressable>

  //                   {item.neutral && item.nutralFun && (
  //                     <Pressable onPress={() => item.nutralFun()}>
  //                       <Text style={styles.sectionDescription}>
  //                         {item.neutral}
  //                       </Text>
  //                     </Pressable>
  //                   )}
  //                   {item.negative && item.negFun && (
  //                     <Pressable onPress={() => item.negFun()}>
  //                       <Text style={styles.sectionDescription}>
  //                         {item.negative}
  //                       </Text>
  //                     </Pressable>
  //                   )}
  //                 </View>
  //               </View>
  //             </View>
  //           </Modal>
  //         );
  //       }}
  //       keyExtractor={item => `${item.id}`}
  //     />
  //   </View>
  // );
}
