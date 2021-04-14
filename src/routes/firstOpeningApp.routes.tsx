import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {NavigationContainer} from '@react-navigation/native';

import Um from '../pages/OnBoarding/um';
import Dois from '../pages/OnBoarding/dois';
import Tres from '../pages/OnBoarding/tres';
import Quatro from '../pages/OnBoarding/quatro';
import Quinto from '../pages/OnBoarding/quinto';
import Intro from '../pages/Intro';

const Stack = createStackNavigator();

const FirstOpeningApp: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {backgroundColor: '#7b68ee'},
        }}>
        <Stack.Screen name="Um" component={Um} />
        <Stack.Screen name="Dois" component={Dois} />
        <Stack.Screen name="Tres" component={Tres} />
        <Stack.Screen name="Quatro" component={Quatro} />
        <Stack.Screen name="Quinto" component={Quinto} />
        <Stack.Screen name="Intro" component={Intro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default FirstOpeningApp;
