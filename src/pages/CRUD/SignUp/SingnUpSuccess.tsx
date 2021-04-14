import React from 'react';
import {Image, View} from 'react-native';

import {ButtonNext, ButtonNextText} from './styles';

const Success: React.FC = () => {
  return (
    <>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image
          style={{
            marginTop: 230,
            marginBottom: 20,
            marginRight: 20,
            width: 230,
            height: 160,
          }}
          source={require('./assets/success.png')}
        />
        <ButtonNext onPress={() => {}}>
          <ButtonNextText>PRÓXIMO</ButtonNextText>
        </ButtonNext>
      </View>
    </>
  );
};

export default Success;
