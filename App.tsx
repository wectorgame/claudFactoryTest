/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Text} from 'react-native';
import {NStack} from './src/navigations/NStack';
import {navs} from './src/utils/navs';

const App = () => {
  const initialRouteName = navs.screens.WelcomePage;

  (Text as any).defaultProps = (Text as any).defaultProps || {};
  (Text as any).defaultProps.allowFontScaling = false;
  return (
    <>
      <NStack initialRouteName={initialRouteName} />
    </>
  );
};

export default App;
