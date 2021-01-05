import React from 'react';
import 'react-native-gesture-handler';
import {View, StatusBar} from 'react-native';

import Routes from './routes';

const App: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#7B68EE" />
    <Routes />
  </>
);

export default App;
