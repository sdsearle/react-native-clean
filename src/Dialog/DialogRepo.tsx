import {useRef, useState} from 'react';
import {DialogModel, baseDialog} from './DialogModel';
import React from 'react';

export const useDialogStore = () => {
  const [dialogModels, setDialogModels] = useState<DialogModel[]>([]);
  const n = useRef(0);

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
    console.log(`ZOL Creating with id ${n}`);
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
      id: n.current,
    };
    n.current = n.current + 1;

    console.log(`Visibility ${newDialog.visibility}`);

    setDialogModels(s => [...s, newDialog]);
  };

  const removeDialog = (id: number) => {
    console.log(`Removing modal with ID: ${id}`);
    console.log(
      `Current Dialogs before removal: ${JSON.stringify(dialogModels)}`,
    );
    setDialogModels(models => models.filter(dialog => dialog.id !== id));
  };

  return {dialogModels, createDialog, removeDialog};
};

export const DialogContext = React.createContext<
  ReturnType<typeof useDialogStore>
>({} as any);

export const DialogProvider: React.FC = ({children}) => {
  const dialogRepo = useDialogStore();

  return (
    <DialogContext.Provider value={dialogRepo}>
      {children}
    </DialogContext.Provider>
  );
};
