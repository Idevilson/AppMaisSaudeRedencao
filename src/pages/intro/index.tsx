import React from 'react';
import {ImageBackground, Image, View, StyleSheet, Text} from 'react-native';

import {Container} from './styles';

import ButtonVerde from '../../components/ButtonVerde';
import ButtonSinza from '../../components/ButtonSinza';

const Intro: React.FC = () => {
  return (
    <>
      <Container>
        <ImageBackground
          source={require('./assets/bg.jpg')}
          style={{
            flex: 1,
            width: 800,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              style={{
                marginTop: 300,
                marginRight: 30,
                width: 360,
                height: 160,
              }}
              source={require('./assets/Logo.png')}
            />
            <Text style={styles.TextStyle}>
              {`Seu aplicativo de saúde e acompanhamento de
                 vacinas em Redenção - PA`}
            </Text>
            <View style={styles.container}>
              <ButtonVerde style={{marginBottom: 10}} onPress={() => {}}>
                ENTRAR
              </ButtonVerde>
              <ButtonSinza onPress={() => {}}>CADASTRAR</ButtonSinza>
            </View>
          </View>
        </ImageBackground>
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 50,
  },
  TextStyle: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Intro;
