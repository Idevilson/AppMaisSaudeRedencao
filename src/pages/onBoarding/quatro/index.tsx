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
                source={require('./assets/gravida.png')}
                style={{
                  marginBottom: 30,
                  marginRight: 24,
                  width: 250,
                  height: 250,
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
            {`ACOMPANHAMENTO
         PRÉ-NATAL`}
          </Text>
        </ContainerPurple>
        <ContainerButtonsHandlePage>
          <WhiteNextButton onPress={() => navigation.goBack()}>
            <ButtonTextContent>Voltar</ButtonTextContent>
          </WhiteNextButton>
          <GreenNextButton onPress={() => navigation.navigate('Quinto')}>
            <ButtonTextContent>Próximo</ButtonTextContent>
          </GreenNextButton>
        </ContainerButtonsHandlePage>
      </Container>
    </>
  );
};

export default Quatro;
