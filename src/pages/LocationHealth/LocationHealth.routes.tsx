import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import LocationHealth from '../LocationHealth';
import BelaVista from './BelaVista';
import PlanaltoII from './PlanaltoII';
import AltoParana from './AltoParana';
import JardimAriane from './JardimAriane';
import SantosDumont from './SantosDumont';
import MarechalRondon from './MarechalRondon';
import AvAraguaia from './AvAraguaia';
import Centro from './Centro';
import VilaDaPedra from './VilaDaPedra';
import AtilaDouglas from './AtilaDouglas';
import VilaMaria from './VilaMaria';
import CamposAltos from './CamposAltos';
import Serrinha from './Serrinha';

const LocationHealthStackNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {backgroundColor: '#7b68ee'},
        }}>
        <Stack.Screen name="LocationHealth" component={LocationHealth} />
        <Stack.Screen name="BelaVista" component={BelaVista} />
        <Stack.Screen name="PlanaltoII" component={PlanaltoII} />
        <Stack.Screen name="AltoParana" component={AltoParana} />
        <Stack.Screen name="JardimAriane" component={JardimAriane} />
        <Stack.Screen name="SantosDumont" component={SantosDumont} />
        <Stack.Screen name="MarechalRondon" component={MarechalRondon} />
        <Stack.Screen name="AvAraguaia" component={AvAraguaia} />
        <Stack.Screen name="Centro" component={Centro} />
        <Stack.Screen name="VilaDaPedra" component={VilaDaPedra} />
        <Stack.Screen name="AtilaDouglas" component={AtilaDouglas} />
        <Stack.Screen name="VilaMaria" component={VilaMaria} />
        <Stack.Screen name="CamposAltos" component={CamposAltos} />
        <Stack.Screen name="Serrinha" component={Serrinha} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default LocationHealthStackNavigator;
