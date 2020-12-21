import React from 'react';
import {View, ImageBackground, Image, Text} from 'react-native';

//import {useNavigation} from '@react-navigation/native';

import {Container, ContainerView} from './styles';

const Quatro: React.FC = () => {
  //const navigation = useNavigation();

  return (
    <>
      <Container>
        <ImageBackground
          source={require('./assets/bg.png')}
          style={{
            marginBottom: 50,
            marginRight: 10,
            width: 400,
            height: 600,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 140,
            }}>
            <ImageBackground
              source={require('./assets/Ellipse.png')}
              style={{
                marginBottom: 50,
                marginRight: 10,
                width: 300,
                height: 300,
              }}>
              <Image
                source={require('./assets/coracao.png')}
                style={{
                  marginTop: 20,
                  marginRight: 35,
                  width: 300,
                  height: 250,
                  resizeMode: 'contain',
                }}
              />
            </ImageBackground>
          </View>
          <Text
            style={{
              color: '#fff',
              marginLeft: 90,
              fontSize: 30,
              marginTop: -27,
            }}>
            {`CAMPANHAS DE
        SAÚDES`}
          </Text>
        </ImageBackground>
      </Container>
      <ContainerView />
    </>
  );
};

export default Quatro;
