import React from 'react';
import {View, Image, Text} from 'react-native';

import {Container, ContainerPurple, ContainerCicle} from './styles';

const Dois: React.FC = () => {
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
      </Container>
    </>
  );
};

export default Dois;
