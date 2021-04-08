import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const AppStack = createStackNavigator();
import SignIn from '../pages/Crud/SignIn';

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
        <AppStack.Screen name="SignIn" component={SignIn} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;

// import Onboarding from '../pages/onBoarding/index';
// import Intro from '../pages/intro';
