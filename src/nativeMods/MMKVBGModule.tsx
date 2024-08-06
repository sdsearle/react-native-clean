import {NativeModules} from 'react-native';
const {MMKVBGModule} = NativeModules;

export const saveMMKVData = async (): Promise<null> => {
  return MMKVBGModule.saveDataBG();
};
