import React from 'react';
import {View, Text} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import Button from '../../components/Button';
import {Container, ContainerView} from './styles';

const Dois: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <Container>
        <View>
          <Text style={{color: '#fff'}}>Onboarding 2</Text>
        </View>
      </Container>
      <ContainerView>
        <Button onPress={() => navigation.navigate('Onboarding3')}>
          Entrar
        </Button>
      </ContainerView>
    </>
  );
};

export default Dois;
