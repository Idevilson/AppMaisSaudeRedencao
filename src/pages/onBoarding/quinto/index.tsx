import React from 'react';
import {View, Image, Text} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {
  Container,
  ContainerPurple,
  ContainerCicle,
  ContainerButtonsHandlePage,
  WhiteNextButton,
  GreenNextButton,
  ButtonTextContent,
} from './styles';

const Quinto: React.FC = () => {
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
        <ContainerButtonsHandlePage>
          <WhiteNextButton onPress={() => navigation.goBack()}>
            <ButtonTextContent>Voltar</ButtonTextContent>
          </WhiteNextButton>
          <GreenNextButton onPress={() => navigation.navigate('Intro')}>
            <ButtonTextContent>Próximo</ButtonTextContent>
          </GreenNextButton>
        </ContainerButtonsHandlePage>
      </Container>
    </>
  );
};

export default Quinto;
