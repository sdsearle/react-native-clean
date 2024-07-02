import {useState} from 'react';
import {DialogModel, baseDialog} from './DialogModel';
import React from 'react';

export const useDialogRepo = () => {
  const [dialogModel, setDialogModel] = useState<DialogModel>(baseDialog);

  const createDialog = (
    t: string,
    des: string,
    pos: string,
    posFun: Function,
    nutral?: string,
    nutralFun?: Function,
    neg?: string,
    negFun?: Function,
  ) => {
    let newDialog = {
      ...dialogModel,
      title: t,
      description: des,
      positive: pos,
      posFun: posFun,
      nutral: nutral,
      nutralFun: nutralFun,
      negative: neg,
      negFun: negFun,
      visibility: true,
    };
    console.log(`Visibility ${newDialog.visibility}`);

    setDialogModel(newDialog);
  };

  const removeDialog = () => {
    setDialogModel(baseDialog);
  };

  return {dialogModel, createDialog, removeDialog};
};

export const DialogContext = React.createContext<
  ReturnType<typeof useDialogRepo>
>({} as any);

export const DialogProvider: React.FC = ({children}) => {
  const dialogRepo = useDialogRepo();

  return (
    <DialogContext.Provider value={dialogRepo}>
      {children}
    </DialogContext.Provider>
  );
};
