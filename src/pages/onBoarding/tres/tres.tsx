import React from 'react';
import {View, ImageBackground, Image, Text} from 'react-native';

import {Container} from './styles';

const Tres: React.FC = () => {
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
                source={require('./assets/logo.png')}
                style={{
                  marginBottom: 500,
                  marginRight: 35,
                  width: 300,
                  height: 300,
                  resizeMode: 'contain',
                }}
              />
            </ImageBackground>
          </View>
          <Text
            style={{
              color: '#fff',
              marginLeft: 55,
              fontSize: 30,
              marginTop: -27,
            }}>
            {`LOCALIZAR POSTOS
          DE SAÚDE`}
          </Text>
        </ImageBackground>
      </Container>
    </>
  );
};

export default Tres;
