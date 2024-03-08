import React from 'react';
import {HomeInteractor} from './HomeInteractor';
import {HomeRepo} from './HomeRepo';
import {HomeViewModel} from './HomeViewModel';
import {Home} from './Home';
import {View} from 'react-native';
import {UpdateCountUseCase} from './UpdateCountUseCase';

const repo = new HomeRepo();
const updateCountUseCase = new UpdateCountUseCase(repo);
const HomeStart = ({navigation}) => {
  const viewModel = HomeViewModel(updateCountUseCase);

  return <Home viewModel={viewModel} navigation={navigation} />;
};

export default HomeStart;
