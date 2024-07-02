import {useContext} from 'react';
import {DialogContext, useDialogRepo} from './DialogRepo';

export const useHideDialogUseCase = () => {
  const repo = useContext(DialogContext);
  const invoke = repo.removeDialog;
  return invoke;
};
