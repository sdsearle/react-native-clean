import React from 'react';
import {Provider} from 'react-redux';
import StuvvmsView from './STUVVMSView';
import store from '.';

const ViewStart = () => {
  return (
    <Provider store={store}>
      <StuvvmsView />
    </Provider>
  );
};

export default ViewStart;
