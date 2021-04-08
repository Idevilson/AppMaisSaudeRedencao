import React from 'react';
import {Button} from 'react-native';

import {createOpenLink} from 'react-native-open-maps';

const OpemMaps = createOpenLink({
  latitude: -8.040546,
  longitude: -50.016615,
  zoom: 0,
  end: 'Posto de saúde comunitário',
  navigate_mode: 'navigate',
});

import {Container} from './styles';

const LocationHealth: React.FC = () => {
  return (
    <Container>
      <Button title="Abrir maps" color="#841584" onPress={OpemMaps} />
    </Container>
  );
};

export default LocationHealth;
