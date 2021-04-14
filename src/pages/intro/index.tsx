import React from 'react';
import {Image} from 'react-native';

import {
  Container,
  ContainerButton,
  Agents,
  ContainerAgentes,
  ButtonNext,
  ButtonNextText,
} from './styles';

import {useNavigation} from '@react-navigation/native';

const Intro: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <Container>
        <ContainerAgentes>
          <Agents source={require('./assets/Agents.png')} />
        </ContainerAgentes>
        <ContainerButton>
          <ButtonNext onPress={() => navigation.navigate('SignIn')}>
            <ButtonNextText>Entrar</ButtonNextText>
          </ButtonNext>
        </ContainerButton>
        <Image
          style={{
            marginRight: 30,
            marginTop: '10%',
            width: 360,
            height: 130,
          }}
          source={require('./assets/Logo.png')}
        />
      </Container>
    </>
  );
};

export default Intro;
