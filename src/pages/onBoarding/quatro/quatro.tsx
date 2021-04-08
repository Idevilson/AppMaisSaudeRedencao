import React from 'react';
import {View, Image, Text} from 'react-native';

import {Container, ContainerPurple, ContainerCicle} from './styles';

const Quatro: React.FC = () => {
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
      </Container>
    </>
  );
};

export default Quatro;
