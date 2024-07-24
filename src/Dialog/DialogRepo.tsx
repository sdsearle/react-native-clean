import {useState} from 'react';
import {DialogModel, baseDialog} from './DialogModel';
import React from 'react';

export const useDialogRepo = () => {
  const [dialogModels, setDialogModels] = useState<DialogModel[]>([]);

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
    let temp = dialogModels;
    temp.push(newDialog);
    console.log(`Visibility ${newDialog.visibility}`);
    console.log(`Length ${temp.length}`);

    setDialogModels(temp);
  };

  const removeDialog = () => {
    let temp = dialogModels;
    temp.pop();
    setDialogModels(temp);
  };

  return {dialogModels, createDialog, removeDialog};
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
