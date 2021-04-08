import React from 'react';
import {View, Image} from 'react-native';

import {Container, ContainerPurple, ContainerCicle} from './styles';

const Um: React.FC = () => {
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
      </Container>
    </>
  );
};

export default Um;
