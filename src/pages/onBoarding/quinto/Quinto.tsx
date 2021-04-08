import React from 'react';
import {View, Image, Text} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {
  Container,
  ContainerView,
  ContainerPurple,
  ContainerCicle,
} from './styles';
import ButtonVerde from './ButtonVerde';

const Quatro: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <Container>
        <ContainerPurple>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 140,
            }}>
            <ContainerCicle>
              <Image
                source={require('./assets/coracao.png')}
                style={{
                  marginTop: 20,
                  marginRight: 10,
                  width: 300,
                  height: 250,
                  resizeMode: 'contain',
                }}
              />
            </ContainerCicle>
          </View>
          <Text
            style={{
              color: '#fff',
              marginLeft: 60,
              fontSize: 30,
              marginTop: 20,
            }}>
            {`CAMPANHAS DE
        SAÚDES`}
          </Text>
        </ContainerPurple>
        <ButtonVerde onPress={() => navigation.navigate('Intro')}>
          Logar
        </ButtonVerde>
      </Container>
      <ContainerView />
    </>
  );
};

export default Quatro;
