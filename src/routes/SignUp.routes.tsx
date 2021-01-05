import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import SignUp1 from '../pages/CRUD/SignUp/SingUp1';
import SignUp2 from '../pages/CRUD/SignUp/SingUp2';

const Tab = createMaterialTopTabNavigator();

const AppRoutes: React.FC = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="SignUp1" component={SignUp1} />
          <Tab.Screen name="SignUp2" component={SignUp2} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default AppRoutes;
