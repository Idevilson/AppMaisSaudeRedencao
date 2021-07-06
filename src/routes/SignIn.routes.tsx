import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {NavigationContainer} from '@react-navigation/native';

import SignIn from '../pages/Crud/SignIn';
import SignUp from '../pages/Crud/SignUp/SingUp';

import RecoveredPassByEmailInsert from '../pages/Crud/passwordRecovery/recoverPassByEmailInsert';
import InsertCodeSendedToEmail from '../pages/Crud/passwordRecovery/InsertCodeSendedToEmail';
import RecoveredPass from '../pages/Crud/passwordRecovery/passwordRecover';

import Home from '../pages/Home';

import LocationHealth from '../pages/LocationHealth';
import BelaVista from '../pages/LocationHealth/BelaVista';
import PlanaltoII from '../pages/LocationHealth/PlanaltoII';
import AltoParana from '../pages/LocationHealth/AltoParana';
import JardimAriane from '../pages/LocationHealth/JardimAriane';
import SantosDumont from '../pages/LocationHealth/SantosDumont';
import MarechalRondon from '../pages/LocationHealth/MarechalRondon';
import AvAraguaia from '../pages/LocationHealth/AvAraguaia';
import Centro from '../pages/LocationHealth/Centro';
import VilaDaPedra from '../pages/LocationHealth/VilaDaPedra';
import AtilaDouglas from '../pages/LocationHealth/AtilaDouglas';
import VilaMaria from '../pages/LocationHealth/VilaMaria';
import CamposAltos from '../pages/LocationHealth/CamposAltos';
import Serrinha from '../pages/LocationHealth/Serrinha';

import WalletVaccine from '../pages/WalletVaccine';
import Settings from '../pages/settings';
import HealthCampaigns from '../pages/healthCampaigns';

const Stack = createStackNavigator();

const SignInRouter: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {backgroundColor: '#7B68EE'},
        }}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />

        <Stack.Screen
          name="RecoveredPassByEmailInsert"
          component={RecoveredPassByEmailInsert}
        />
        <Stack.Screen
          name="InsertCodeSendedToEmail"
          component={InsertCodeSendedToEmail}
        />
        <Stack.Screen name="RecoveredPass" component={RecoveredPass} />

        <Stack.Screen name="Home" component={Home} />

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

        <Stack.Screen name="WalletVaccine" component={WalletVaccine} />

        <Stack.Screen name="Settings" component={Settings} />

        <Stack.Screen name="HealthCampaigns" component={HealthCampaigns} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SignInRouter;
