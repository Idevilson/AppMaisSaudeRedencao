import React from 'react';

import {Text, Image} from 'react-native';

import ButtonMenu from '../../components/ButtonMenu';

import {
  Container,
  HeaderView,
  ButtonsAppMenu,
  ScrowButtonsContainer,
} from './style';

import {useNavigation} from '@react-navigation/native';

const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <Container>
        <HeaderView>
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
              marginLeft: 30,
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
              marginLeft: 30,
              position: 'absolute',
              marginTop: 130,
            }}>
            xxx-xxxx-xxxx-xxxx
          </Text>
        </HeaderView>
        <ScrowButtonsContainer>
          <ButtonsAppMenu>
            <Image
              style={{
                width: 80,
                height: 80,
                marginTop: 5,
                marginLeft: 30,
              }}
              source={require('./assets/vacina.png')}
            />
            <ButtonMenu onPress={() => navigation.navigate('WalletVaccine')}>
              {'CARTÃO DE VACINAS'}
            </ButtonMenu>
          </ButtonsAppMenu>

          <ButtonsAppMenu>
            <Image
              style={{
                width: 80,
                height: 80,
                marginTop: 5,
                marginLeft: 30,
              }}
              source={require('./assets/coracao.png')}
            />
            <ButtonMenu
              onPress={() =>
                navigation.navigate('HealthCampaigns')
              }>{`CAMPANHAS DE
          SAÚDE`}</ButtonMenu>
          </ButtonsAppMenu>

          <ButtonsAppMenu>
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
          </ButtonsAppMenu>

          <ButtonsAppMenu>
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
          </ButtonsAppMenu>

          <ButtonsAppMenu>
            <Image
              style={{
                width: 110,
                height: 80,
                marginTop: 10,
                marginLeft: 20,
              }}
              source={require('./assets/settings.png')}
            />
            <ButtonMenu onPress={() => navigation.navigate('Settings')}>
              CONFIGURAÇÕES
            </ButtonMenu>
          </ButtonsAppMenu>
        </ScrowButtonsContainer>
      </Container>
    </>
  );
};

export default Home;
