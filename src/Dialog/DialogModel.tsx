export interface DialogModel {
  title: string;
  description: string;
  positive: string;
  posFun: Function;
  neutral?: string;
  nutralFun?: Function;
  negative?: string;
  negFun?: Function;
  visibility: boolean;
}

export const baseDialog: DialogModel = {
  title: 'Base',
  description: '',
  positive: '',
  posFun: () => {},
  neutral: '',
  nutralFun: () => {},
  negative: '',
  negFun: () => {},
  visibility: false,
};
