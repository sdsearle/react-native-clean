import {useContext} from 'react';
import {DialogContext, useDialogRepo} from './DialogRepo';

export const useShowDialog = () => {
  const repo = useContext(DialogContext);
  const invoke = repo.createDialog;
  return invoke;
};
