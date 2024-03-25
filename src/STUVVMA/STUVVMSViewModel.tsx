import {useDispatch, useSelector} from 'react-redux';
import {CounterStateType, StoreType} from './CounterStateType';
import {useNavigation} from '@react-navigation/native';
import {StuvvmsActions} from './STUVVMSSlice';

const useStuvvmsViewModel = () => {
  const dispatch = useDispatch();
  const {count}: CounterStateType = useSelector(
    (state: StoreType) => state.counter,
  );
  const {increment} = StuvvmsActions;

  const navigation = useNavigation();

  return {
    count,
    increment: () => dispatch(increment()),
    navToPokemon: () => navigation.navigate('Pokemon'),
  };
};

export default useStuvvmsViewModel;
