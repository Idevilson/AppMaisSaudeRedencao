import React from 'react';
import {View, Text} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import Button from '../../components/Button';
import {Container, ContainerView} from './styles';

const Tres: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <Container>
        <View>
          <Text style={{color: '#fff'}}>Onboarding 3</Text>
        </View>
      </Container>
      <ContainerView>
        <Button onPress={() => navigation.navigate('Onboarding4')}>
          Entrar
        </Button>
      </ContainerView>
    </>
  );
};

export default Tres;
