/**
 * @format
 */
import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

const AppWithWrappers = () => (
  <>
    <NavigationContainer>
      <App />
    </NavigationContainer>
  </>
);
AppRegistry.registerComponent(appName, () => AppWithWrappers);
