import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

import WalletVaccine from '../pages/WalletVaccine';

const Stack = createStackNavigator();

const DevRoutes: React.FC = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: {backgroundColor: '#7b68ee'},
          }}>
          <Stack.Screen name="WalletVaccine" component={WalletVaccine} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default DevRoutes;
