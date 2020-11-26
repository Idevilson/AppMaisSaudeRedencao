import React from 'react';
import {View, Text} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import Button from '../../components/Button';
import {Container, ContainerView} from './styles';

const Um: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <Container>
        <View>
          <Text style={{color: '#fff'}}>Onboarding 1</Text>
        </View>
      </Container>
      <ContainerView>
        <Button onPress={() => navigation.navigate('Onboarding2')}>
          Entrar
        </Button>
      </ContainerView>
    </>
  );
};

export default Um;
