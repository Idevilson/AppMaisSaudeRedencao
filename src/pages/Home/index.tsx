import React from 'react';

import {Text, View, Image, ImageBackground} from 'react-native';

import ButtonMenu from '../../components/ButtonMenu';

import {Container, SettingButton} from './style';

import {useNavigation} from '@react-navigation/native';

const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <Container>
        <View>
          <ImageBackground
            style={{width: 400, height: 230, marginBottom: 30, marginTop: 130}}
            source={require('./assets/backgroundHome.png')}>
            <Text
              style={{
                color: '#fff',
                fontSize: 25,
                fontWeight: 'bold',
                marginLeft: 80,
                marginTop: 30,
              }}>
              + SAÚDE REDENÇÃO
            </Text>
            <Image
              style={{height: 3, marginLeft: 35, marginTop: 20}}
              source={require('./assets/Linha.png')}
            />

            <Text
              style={{
                color: '#fff',
                fontSize: 20,
                fontWeight: 'bold',
                marginLeft: 150,
                position: 'absolute',
                marginTop: 110,
              }}>
              Soraia da Silva
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 20,
                fontWeight: 'bold',
                marginLeft: 150,
                position: 'absolute',
                marginTop: 135,
              }}>
              28 anos
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 20,
                fontWeight: 'bold',
                marginLeft: 150,
                position: 'absolute',
                marginTop: 160,
              }}>
              xxx-xxxx-xxxx-xxxx
            </Text>
            <View
              style={{
                width: 120,
                height: 120,
                borderRadius: 120 / 2,
                backgroundColor: 'white',
                marginLeft: 20,
                marginTop: 10,
              }}>
              <Image
                style={{
                  width: 120,
                  height: 120,
                }}
                source={require('./assets/mulher.png')}
              />
            </View>
            <SettingButton>
              <Image source={require('./assets/settings.png')} />
            </SettingButton>
          </ImageBackground>
        </View>
        <View>
          <View
            style={{
              width: 180 * 2,
              height: 100,
              backgroundColor: '#fff',
              borderRadius: 30,
              borderWidth: 2,
              borderBottomColor: '#000000',
              marginLeft: 10,
            }}>
            <Image
              style={{
                width: 80,
                height: 80,
                marginTop: 5,
                marginLeft: 30,
              }}
              source={require('./assets/vacina.png')}
            />

            <ButtonMenu>{`CARTÃO DE
    VACINAS`}</ButtonMenu>
          </View>

          <View
            style={{
              margin: 10,
              width: 180 * 2,
              height: 100,
              backgroundColor: '#fff',
              borderRadius: 30,
              borderWidth: 2,
              borderBottomColor: '#000000',
            }}>
            <Image
              style={{
                width: 80,
                height: 80,
                marginTop: 5,
                marginLeft: 30,
              }}
              source={require('./assets/coracao.png')}
            />
            <ButtonMenu>{`CAMPANHAS DE
          SAÚDE`}</ButtonMenu>
          </View>
          <View
            style={{
              margin: 10,
              width: 180 * 2,
              height: 100,
              backgroundColor: '#fff',
              borderRadius: 30,
              borderWidth: 2,
              borderBottomColor: '#000000',
            }}>
            <Image
              style={{
                width: 80,
                height: 80,
                marginTop: 5,
                marginLeft: 30,
              }}
              source={require('./assets/mapa.png')}
            />
            <ButtonMenu
              onPress={() =>
                navigation.navigate('LocationHealth')
              }>{`POSTOS DE SAÚDE
    MAIS PRÓXIMOS`}</ButtonMenu>
          </View>

          <View
            style={{
              margin: 10,
              width: 180 * 2,
              height: 100,
              backgroundColor: '#fff',
              borderRadius: 30,
              borderWidth: 2,
              borderBottomColor: '#000000',
            }}>
            <Image
              style={{
                width: 80,
                height: 80,
                marginTop: 5,
                marginLeft: 30,
              }}
              source={require('./assets/COMPRI.png')}
            />
            <ButtonMenu>TRATAMENTOS</ButtonMenu>
          </View>
        </View>
      </Container>
    </>
  );
};

export default Home;
