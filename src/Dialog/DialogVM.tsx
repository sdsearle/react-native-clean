import {useContext} from 'react';
import {DialogContext, useDialogRepo} from './DialogRepo';

export const useDialogVM = () => {
  const dialog = useContext(DialogContext);
  return dialog;
};
