import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const AppStack = createStackNavigator();

import Um from '../pages/onBoarding/um';
import Dois from '../pages/onBoarding/dois';
import Tres from '../pages/onBoarding/tres';
import Quatro from '../pages/onBoarding/quartro';
import Quinto from '../pages/onBoarding/Quinto';

const AppRoutes: React.FC = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {backgroundColor: '#7B68EE'},
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <AppStack.Screen name="Onboarding1" component={Um} />
        <AppStack.Screen name="Onboarding2" component={Dois} />
        <AppStack.Screen name="Onboarding3" component={Tres} />
        <AppStack.Screen name="Onboarding4" component={Quatro} />
        <AppStack.Screen name="Onboarding5" component={Quinto} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
