import {useContext, useState} from 'react';
import {DialogContext} from './DialogRepo';
import {Alert} from 'react-native';

export const useDialogVM = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const context = useContext(DialogContext);
  const getDialogs = () => {
    return context.dialogModels;
  };
  const dialogs = getDialogs();

  const close = () => {
    Alert.alert('Modal has been closed.');
    setModalVisible(!modalVisible);
  };
  return {dialogs, close, modalVisible};
};
