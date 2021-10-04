import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {WelcomePageScreen} from '../screens/welcome-page/WelcomePageScreen';
import {QuotationScreen} from '../screens/quotation/QuotationScreen';
import { moderateScale } from 'react-native-size-matters';

export type NStackParamList = {
  WelcomePage: undefined;
  Quotation: undefined;
};
interface Props {
  initialRouteName: string;
}
const Stack = createStackNavigator<NStackParamList>();
export const NStack = (props: Props) => {
  const initialRouteName = props.initialRouteName as keyof NStackParamList;
  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{gestureEnabled: false}}>
      <Stack.Screen
        name="WelcomePage"
        component={WelcomePageScreen}
        options={{title: 'WelcomePage', headerShown: false}}
      />
      <Stack.Screen
        name="Quotation"
        component={QuotationScreen}
        options={{
          title: 'Quotation',
          headerTitleAlign: 'center',
          headerTitleStyle: {fontSize: moderateScale(14), fontWeight: 'bold'},
        }}
      />
    </Stack.Navigator>
  );
};
