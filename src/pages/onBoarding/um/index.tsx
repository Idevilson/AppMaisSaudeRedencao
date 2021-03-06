import React from 'react';
import {View, Image} from 'react-native';

import {
  Container,
  ContainerPurple,
  ContainerCicle,
  ContainerButtonsHandlePage,
  GreenNextButton,
  ButtonTextContent,
} from './styles';

import {useNavigation} from '@react-navigation/native';

const Um: React.FC = () => {
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
                source={require('./assets/MaisSaudeLogo.png')}
                style={{
                  marginRight: 30,
                  marginTop: 10,
                  width: 290,
                  resizeMode: 'contain',
                }}
              />
            </ContainerCicle>
          </View>
        </ContainerPurple>
        <ContainerButtonsHandlePage>
          <GreenNextButton onPress={() => navigation.navigate('Dois')}>
            <ButtonTextContent>Próximo</ButtonTextContent>
          </GreenNextButton>
        </ContainerButtonsHandlePage>
      </Container>
    </>
  );
};

export default Um;
