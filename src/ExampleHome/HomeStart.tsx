import React from 'react';
import {HomeInteractor} from './HomeInteractor';
import {HomeRepo} from './HomeRepo';
import {HomeViewModel} from './HomeViewModel';
import {Home} from './Home';
import {View} from 'react-native';

const repo = new HomeRepo();
const interactor = new HomeInteractor(repo);
const HomeStart = () => {
  const viewModel = HomeViewModel(interactor);

  return <Home viewModel={viewModel} />;
};

export default HomeStart;
