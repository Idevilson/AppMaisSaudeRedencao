import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

const Stack = createStackNavigator();

import OnBoarding from '../pages/OnBoarding';
import Intro from '../pages/Intro';
import SignIn from '../pages/Crud/SignIn';
import SignUp1 from '../pages/Crud/SignUp/SingUp1';
import SignUp2 from '../pages/Crud/SignUp/SingUp2';
import Home from '../pages/Home';
import LocationHealth from '../pages/LocationHealth';

const AllNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {backgroundColor: '#7b68ee'},
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp1" component={SignUp1} />
        <Stack.Screen name="SignUp2" component={SignUp2} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LocationHealth" component={LocationHealth} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AllNavigator;
