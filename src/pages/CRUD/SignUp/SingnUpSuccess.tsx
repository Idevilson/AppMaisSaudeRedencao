import React from 'react';
import {Image, View} from 'react-native';

import ButtonVerde from '../../../components/ButtonVerde';

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
        <ButtonVerde onPress={() => {}}>LOGAR</ButtonVerde>
      </View>
    </>
  );
};

export default Success;
