import {useContext} from 'react';
import {DialogContext, useDialogRepo} from './DialogRepo';

export const useDialogVM = () => {
  const context = useContext(DialogContext);
  const getDialogs = () => {
    return context.dialogModels;
  };
  const dialogs = getDialogs();
  return {dialogs};
};
