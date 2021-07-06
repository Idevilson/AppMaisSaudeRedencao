/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, Image} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import {createOpenLink} from 'react-native-open-maps';

import {useNavigation} from '@react-navigation/native';

import ButtonMenu from '../../components/ButtonMenu';

const OpemMapsPlanaltoII = createOpenLink({
  latitude: -8.057294,
  longitude: -50.041577,
  end: '-8.057294, -50.041577',
  navigate_mode: 'navigate',
});

const OpemMapsCentro = createOpenLink({
  latitude: -8.0279700,
  longitude: -50.0357500,
  end: 'R. Ademar Guimarães, 656 - St. Oeste',
  navigate_mode: 'navigate',
});

const OpemMapsMarechalRondon = createOpenLink({
  latitude: -8.0233200,
  longitude: -50.0305300,
  end: 'Av. Dr. Paulo Quartim Barbosa, 1549 - Bela Vista',
  navigate_mode: 'navigate',
});

const OpemMapsVilaDaPedra = createOpenLink({
  latitude: -8.0334100,
  longitude: -8.0334100,
  end: 'R. Vinte e Sete, 613 - Independencia',
  navigate_mode: 'navigate',
});

const OpemMapsBelaVista = createOpenLink({
  latitude: -8.0199400,
  longitude: -50.0264300,
  end: 'R. Deli Vilas Boas, 1545 - Bela Vista',
  navigate_mode: 'navigate',
});

const OpemMapsSerrinha = createOpenLink({
  latitude: -8.0233900,
  longitude: -50.0181300,
  end: 'Av. Otavio Baptist Arantes, 769 - Serrinha',
  navigate_mode: 'navigate',
});

const OpemMapsCampusAltos = createOpenLink({
  latitude: -8.0457800,
  longitude: -50.0497400,
  end: '-8.0457800, -50.0497400',
  navigate_mode: 'navigate',
});

const OpemMapsAvAraguaia = createOpenLink({
  latitude: -8.0446500,
  longitude: -50.0215700,
  end: 'Av. Araguaia, 2549 - St. Morada da Paz',
  navigate_mode: 'navigate',
});

const OpemMapsAtilaDouglas = createOpenLink({
  latitude: -8.0556850,
  longitude: -50.0326730,
  end: '-8.0556850,-50.0326730',
  navigate_mode: 'navigate',
});

const OpemMapsAltoParana = createOpenLink({
  latitude: -8.040532897817924,
  longitude: -50.0165984238383,
  end: '-8.040532897817924, -50.0165984238383',
  navigate_mode: 'navigate',
});

const OpemMapsSantosDumont = createOpenLink({
  latitude: -8.05029184325245,
  longitude: -50.01519260184741,
  end: '-8.05029184325245, -50.01519260184741',
  navigate_mode: 'navigate',
});

const OpemMapsJardimAriane = createOpenLink({
  latitude: -8.04293736040415,
  longitude: -49.99980293960276,
  end: '-8.04293736040415, -49.99980293960276',
  navigate_mode: 'navigate',
});

const OpemMapsVilaMaria = createOpenLink({
  latitude: -8.058353866395294,
  longitude: -50.01392831325704,
  end: '-8.058351874601115, -50.01392764270561',
  navigate_mode: 'navigate',
});



import {
  Container,
  Header,
  BackButton,
  ScrowCardsContainer,
  AboutUnityHealth,
  ButtonsAppMenu,
} from './styles';

const LocationHealth: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={35} color="#fff" />
        </BackButton>
        <Text style={{color: '#fff', fontSize: 30, position: 'absolute'}}>
          TODOS OS POSTOS
        </Text>
      </Header>
      <ScrowCardsContainer>

        <ButtonsAppMenu>
            <ButtonMenu
              onPress={() =>
                navigation.navigate('AltoParana')
              }>{` UNIDADE DE SAÚDE
SETOR ALTO PARANÁ`}
            </ButtonMenu>
          <AboutUnityHealth onPress={OpemMapsAltoParana}>
            <Image
              style={{
                width: 80,
                height: 80,
                marginTop: 5,
                marginRight: 30,
              }}
              source={require('./assets/mapa.png')}
            />
          </AboutUnityHealth>
        </ButtonsAppMenu>

        <ButtonsAppMenu>
            <ButtonMenu
              onPress={() =>
                navigation.navigate('AtilaDouglas')
              }>{`    UNIDAD DE SAÚDE
SETOR ATILA DOUGLAS`}
            </ButtonMenu>
          <AboutUnityHealth onPress={OpemMapsAtilaDouglas}>
            <Image
              style={{
                width: 80,
                height: 80,
                marginTop: 5,
                marginRight: 30,
              }}
              source={require('./assets/mapa.png')}
            />
          </AboutUnityHealth>
        </ButtonsAppMenu>

        <ButtonsAppMenu>
            <ButtonMenu
              onPress={() =>
                navigation.navigate('AvAraguaia')
              }>{`UNIDADE DE SAÚDE
      AV. ARAGUAIA`}
            </ButtonMenu>
          <AboutUnityHealth onPress={OpemMapsAvAraguaia}>
            <Image
              style={{
                width: 80,
                height: 80,
                marginTop: 5,
                marginRight: 30,
              }}
              source={require('./assets/mapa.png')}
            />
          </AboutUnityHealth>
        </ButtonsAppMenu>

        <ButtonsAppMenu>
          <ButtonMenu
              onPress={() =>
                navigation.navigate('BelaVista')
              }>{`UNIDADE DE SAÚDE
 SETOR BELA VISTA`}
          </ButtonMenu>
          <AboutUnityHealth onPress={OpemMapsBelaVista}>
            <Image
              style={{
                width: 80,
                height: 80,
                marginTop: 5,
                marginRight: 30,
              }}
              source={require('./assets/mapa.png')}
            />
          </AboutUnityHealth>
        </ButtonsAppMenu>

        <ButtonsAppMenu>
          <ButtonMenu
              onPress={() =>
                navigation.navigate('CamposAltos')
              }>{`  UNIDADE DE SAÚDE
SETOR CAMPUS ALTOS`}
          </ButtonMenu>
          <AboutUnityHealth onPress={OpemMapsCampusAltos}>
            <Image
              style={{
                width: 80,
                height: 80,
                marginTop: 5,
                marginRight: 30,
              }}
              source={require('./assets/mapa.png')}
            />
          </AboutUnityHealth>
        </ButtonsAppMenu>

        <ButtonsAppMenu>
          <ButtonMenu
              onPress={() =>
                navigation.navigate('Centro')
              }>{`UNIDADE DE SAÚDE
    SETOR CENTRO`}
          </ButtonMenu>
          <AboutUnityHealth onPress={OpemMapsCentro}>
            <Image
              style={{
                width: 80,
                height: 80,
                marginTop: 5,
                marginRight: 30,
              }}
              source={require('./assets/mapa.png')}
            />
          </AboutUnityHealth>

        </ButtonsAppMenu>

        <ButtonsAppMenu>
          <ButtonMenu
              onPress={() =>
                navigation.navigate('JardimAriane')
              }>{`    UNIDADE DE SAÚDE
 SETOR JARDIM ARIANE`}
          </ButtonMenu>
          <AboutUnityHealth onPress={OpemMapsJardimAriane}>
            <Image
              style={{
                width: 80,
                height: 80,
                marginTop: 5,
                marginRight: 30,
              }}
              source={require('./assets/mapa.png')}
            />
          </AboutUnityHealth>
        </ButtonsAppMenu>

        <ButtonsAppMenu>
          <ButtonMenu
              onPress={() =>
                navigation.navigate('MarechalRondon')
              }>{`  UNIDADE DE SAÚDE
   SETOR MARECHAL
            RONDON`}
          </ButtonMenu>
          <AboutUnityHealth onPress={OpemMapsMarechalRondon}>
            <Image
              style={{
                width: 80,
                height: 80,
                marginTop: 5,
                marginRight: 30,
              }}
              source={require('./assets/mapa.png')}
            />
          </AboutUnityHealth>
        </ButtonsAppMenu>

        <ButtonsAppMenu>
          <ButtonMenu
              onPress={() =>
                navigation.navigate('PlanaltoII')
              }>{`UNIDADE DE SAÚDE
SETOR PLANALTO II`}
          </ButtonMenu>
          <AboutUnityHealth onPress={OpemMapsPlanaltoII}>
            <Image
              style={{
                width: 80,
                height: 80,
                marginTop: 5,
                marginRight: 30,
              }}
              source={require('./assets/mapa.png')}
            />
          </AboutUnityHealth>
        </ButtonsAppMenu>

        <ButtonsAppMenu>
          <ButtonMenu
              onPress={() =>
                navigation.navigate('SantosDumont')
              }>{`    UNIDADE DE SAÚDE
SETOR SANTOS DUMONT`}
          </ButtonMenu>
          <AboutUnityHealth onPress={OpemMapsSantosDumont}>
            <Image
              style={{
                width: 80,
                height: 80,
                marginTop: 5,
                marginRight: 30,
              }}
              source={require('./assets/mapa.png')}
            />
          </AboutUnityHealth>
        </ButtonsAppMenu>

        <ButtonsAppMenu>
            <ButtonMenu
              onPress={() =>
                navigation.navigate('Serrinha')
              }>{`UNIDADE DE SAÚDE
  SETOR SERRINHA`}
            </ButtonMenu>
          <AboutUnityHealth onPress={OpemMapsSerrinha}>
            <Image
              style={{
                width: 80,
                height: 80,
                marginTop: 5,
                marginRight: 30,
              }}
              source={require('./assets/mapa.png')}
            />
          </AboutUnityHealth>

        </ButtonsAppMenu>

        <ButtonsAppMenu>
            <ButtonMenu
              onPress={() =>
                navigation.navigate('VilaDaPedra')
              }>{`  UNIDADE DE SAÚDE
SETOR VILA DA PEDRA`}</ButtonMenu>
          <AboutUnityHealth onPress={OpemMapsVilaDaPedra}>
            <Image
              style={{
                width: 80,
                height: 80,
                marginTop: 5,
                marginRight: 30,
              }}
              source={require('./assets/mapa.png')}
            />
          </AboutUnityHealth>

        </ButtonsAppMenu>

        <ButtonsAppMenu>
         <ButtonMenu
              onPress={() =>
                navigation.navigate('VilaMaria')
              }>{`UNIDAD DE SAÚDE
SETOR VILA MARIA`}
          </ButtonMenu>
          <AboutUnityHealth onPress={OpemMapsVilaMaria}>
            <Image
              style={{
                width: 80,
                height: 80,
                marginTop: 5,
                marginRight: 30,
              }}
              source={require('./assets/mapa.png')}
            />
          </AboutUnityHealth>
        </ButtonsAppMenu>
      </ScrowCardsContainer>
    </Container>
  );
};

export default LocationHealth;
