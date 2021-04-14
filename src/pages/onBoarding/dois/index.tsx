import React from 'react';
import {View, Image, Text} from 'react-native';

import {
  Container,
  ContainerPurple,
  ContainerCicle,
  ContainerButtonsHandlePage,
  WhiteNextButton,
  GreenNextButton,
  ButtonTextContent,
} from './styles';

import {useNavigation} from '@react-navigation/native';

const Dois: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <Container>
        <ContainerPurple>
          <View
            style={{
              marginLeft: 50,
              marginTop: 140,
            }}>
            <ContainerCicle>
              <Image
                source={require('./assets/livro.png')}
                style={{
                  width: 200,
                  height: 300,
                  resizeMode: 'contain',
                }}
              />
            </ContainerCicle>
          </View>
          <Text
            style={{
              color: '#fff',
              marginLeft: 30,
              fontSize: 30,
              marginTop: 20,
            }}>
            {'CARTÃO DE VACINAS'}
          </Text>
        </ContainerPurple>
        <ContainerButtonsHandlePage>
          <WhiteNextButton onPress={() => navigation.goBack()}>
            <ButtonTextContent>Voltar</ButtonTextContent>
          </WhiteNextButton>
          <GreenNextButton onPress={() => navigation.navigate('Tres')}>
            <ButtonTextContent>Próximo</ButtonTextContent>
          </GreenNextButton>
        </ContainerButtonsHandlePage>
      </Container>
    </>
  );
};

export default Dois;
