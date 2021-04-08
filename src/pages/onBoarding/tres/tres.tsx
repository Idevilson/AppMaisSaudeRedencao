import React from 'react';
import {View, Image, Text} from 'react-native';

import {Container, ContainerPurple, ContainerCicle} from './styles';

const Tres: React.FC = () => {
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
                source={require('./assets/mapa.png')}
                style={{
                  marginRight: 4,
                  width: 220,
                  height: 220,
                  resizeMode: 'contain',
                }}
              />
            </ContainerCicle>
          </View>
          <Text
            style={{
              color: '#fff',
              marginLeft: 40,
              marginTop: 20,
              fontSize: 30,
            }}>
            {`LOCALIZAR POSTOS
          DE SAÚDE`}
          </Text>
        </ContainerPurple>
      </Container>
    </>
  );
};

export default Tres;
