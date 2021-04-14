/* eslint-disable prettier/prettier */
import React from 'react';
import {Text} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import {createOpenLink} from 'react-native-open-maps';

import {useNavigation} from '@react-navigation/native';

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
  CardFindHealthUnity,
  ButtonOpemMaps,
  ScrowCardsContainer,
  TopCardFindHealthUnity,
  NumberUnityHealth,
} from './styles';

const LocationHealth: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}}>
          <Icon name="arrow-left" size={35} color="#fff" />
        </BackButton>
        <Text style={{color: '#fff', fontSize: 30, position: 'absolute'}}>
          TODOS OS POSTOS
        </Text>
      </Header>
      <ScrowCardsContainer>
        <CardFindHealthUnity>
          <TopCardFindHealthUnity
            onPress={() => navigation.navigate('BelaVista')}>
            <NumberUnityHealth>1</NumberUnityHealth>
            <Text style={{position: 'absolute'}}>
              POSTO DE SAÚDE SETOR BELA VISTA
            </Text>
          </TopCardFindHealthUnity>

          <ButtonOpemMaps onPress={OpemMapsBelaVista}>
            <Icon
              name="navigation"
              size={22}
              color="#fff"
              style={{marginTop: 5, marginRight: 10}}
            />
            <Text
              style={{
                color: '#fff',
                fontSize: 22,
                marginRight: 30,
              }}>
              IR PARA O MAPS
            </Text>
          </ButtonOpemMaps>
        </CardFindHealthUnity>

        <CardFindHealthUnity>
          <TopCardFindHealthUnity
            onPress={() => navigation.navigate('PlanaltoII')}>
            <NumberUnityHealth>2</NumberUnityHealth>
            <Text style={{position: 'absolute'}}>
              POSTO DE SAÚDE SETOR PLANALTO II
            </Text>
          </TopCardFindHealthUnity>
          <ButtonOpemMaps onPress={OpemMapsPlanaltoII}>
            <Icon
              name="navigation"
              size={22}
              color="#fff"
              style={{marginTop: 5, marginRight: 10}}
            />
            <Text
              style={{
                color: '#fff',
                fontSize: 22,
                marginRight: 30,
              }}>
              IR PARA O MAPS
            </Text>
          </ButtonOpemMaps>
        </CardFindHealthUnity>

        <CardFindHealthUnity>
          <TopCardFindHealthUnity
            onPress={() => navigation.navigate('AltoParana')}>
            <NumberUnityHealth>3</NumberUnityHealth>
            <Text style={{position: 'absolute'}}>
              POSTO DE SAÚDE SETOR ALTO PARANÁ
            </Text>
          </TopCardFindHealthUnity>
          <ButtonOpemMaps onPress={OpemMapsAltoParana}>
            <Icon
              name="navigation"
              size={22}
              color="#fff"
              style={{marginTop: 5, marginRight: 10}}
            />
            <Text
              style={{
                color: '#fff',
                fontSize: 22,
                marginRight: 30,
              }}>
              IR PARA O MAPS
            </Text>
          </ButtonOpemMaps>
        </CardFindHealthUnity>

        <CardFindHealthUnity>
          <TopCardFindHealthUnity
            onPress={() => navigation.navigate('JardimAriane')}>
            <NumberUnityHealth>4</NumberUnityHealth>
            <Text style={{position: 'absolute'}}>
              POSTO DE SAÚDE SETOR JARDIM ARIANE
            </Text>
          </TopCardFindHealthUnity>
          <ButtonOpemMaps onPress={OpemMapsJardimAriane}>
            <Icon
              name="navigation"
              size={22}
              color="#fff"
              style={{marginTop: 5, marginRight: 10}}
            />
            <Text
              style={{
                color: '#fff',
                fontSize: 22,
                marginRight: 30,
              }}>
              IR PARA O MAPS
            </Text>
          </ButtonOpemMaps>
        </CardFindHealthUnity>

        <CardFindHealthUnity>
          <TopCardFindHealthUnity
            onPress={() => navigation.navigate('SantosDumont')}>
            <NumberUnityHealth>5</NumberUnityHealth>
            <Text style={{position: 'absolute'}}>
              POSTO DE SAÚDE SETOR SANTOS DUMONT
            </Text>
          </TopCardFindHealthUnity>
          <ButtonOpemMaps onPress={OpemMapsSantosDumont}>
            <Icon
              name="navigation"
              size={22}
              color="#fff"
              style={{marginTop: 5, marginRight: 10}}
            />
            <Text
              style={{
                color: '#fff',
                fontSize: 22,
                marginRight: 30,
              }}>
              IR PARA O MAPS
            </Text>
          </ButtonOpemMaps>
        </CardFindHealthUnity>

        <CardFindHealthUnity>
          <TopCardFindHealthUnity
            onPress={() => navigation.navigate('MarechalRondon')}>
            <NumberUnityHealth>6</NumberUnityHealth>
            <Text style={{position: 'absolute'}}>
              POSTO DE SAÚDE SETOR MARECHAL RONDON
            </Text>
          </TopCardFindHealthUnity>
          <ButtonOpemMaps onPress={OpemMapsMarechalRondon}>
            <Icon
              name="navigation"
              size={22}
              color="#fff"
              style={{marginTop: 5, marginRight: 10}}
            />
            <Text
              style={{
                color: '#fff',
                fontSize: 22,
                marginRight: 30,
              }}>
              IR PARA O MAPS
            </Text>
          </ButtonOpemMaps>
        </CardFindHealthUnity>

        <CardFindHealthUnity>
          <TopCardFindHealthUnity
            onPress={() => navigation.navigate('AvAraguaia')}>
            <NumberUnityHealth>7</NumberUnityHealth>
            <Text style={{position: 'absolute'}}>
              POSTO DE SAÚDE AV. ARAGUAIA
            </Text>
          </TopCardFindHealthUnity>
          <ButtonOpemMaps onPress={OpemMapsAvAraguaia}>
            <Icon
              name="navigation"
              size={22}
              color="#fff"
              style={{marginTop: 5, marginRight: 10}}
            />
            <Text
              style={{
                color: '#fff',
                fontSize: 22,
                marginRight: 30,
              }}>
              IR PARA O MAPS
            </Text>
          </ButtonOpemMaps>
        </CardFindHealthUnity>

        <CardFindHealthUnity>
          <TopCardFindHealthUnity onPress={() => navigation.navigate('Centro')}>
            <NumberUnityHealth>8</NumberUnityHealth>
            <Text style={{position: 'absolute'}}>
              POSTO DE SAÚDE SETOR CENTRO
            </Text>
          </TopCardFindHealthUnity>
          <ButtonOpemMaps onPress={OpemMapsCentro}>
            <Icon
              name="navigation"
              size={22}
              color="#fff"
              style={{marginTop: 5, marginRight: 10}}
            />
            <Text
              style={{
                color: '#fff',
                fontSize: 22,
                marginRight: 30,
              }}>
              IR PARA O MAPS
            </Text>
          </ButtonOpemMaps>
        </CardFindHealthUnity>

        <CardFindHealthUnity>
          <TopCardFindHealthUnity
            onPress={() => navigation.navigate('VilaDaPedra')}>
            <NumberUnityHealth>9</NumberUnityHealth>
            <Text style={{position: 'absolute'}}>
              POSTO DE SAÚDE VILA DA PEDRA
            </Text>
          </TopCardFindHealthUnity>
          <ButtonOpemMaps onPress={OpemMapsVilaDaPedra}>
            <Icon
              name="navigation"
              size={22}
              color="#fff"
              style={{marginTop: 5, marginRight: 10}}
            />
            <Text
              style={{
                color: '#fff',
                fontSize: 22,
                marginRight: 30,
              }}>
              IR PARA O MAPS
            </Text>
          </ButtonOpemMaps>
        </CardFindHealthUnity>

        <CardFindHealthUnity>
          <TopCardFindHealthUnity
            onPress={() => navigation.navigate('AtilaDouglas')}>
            <NumberUnityHealth>10</NumberUnityHealth>
            <Text style={{position: 'absolute'}}>
              POSTO DE SAÚDE ATILA DOUGLAS
            </Text>
          </TopCardFindHealthUnity>
          <ButtonOpemMaps onPress={OpemMapsAtilaDouglas}>
            <Icon
              name="navigation"
              size={22}
              color="#fff"
              style={{marginTop: 5, marginRight: 10}}
            />
            <Text
              style={{
                color: '#fff',
                fontSize: 22,
                marginRight: 30,
              }}>
              IR PARA O MAPS
            </Text>
          </ButtonOpemMaps>
        </CardFindHealthUnity>

        <CardFindHealthUnity>
          <TopCardFindHealthUnity
            onPress={() => navigation.navigate('VilaMaria')}>
            <NumberUnityHealth>11</NumberUnityHealth>
            <Text style={{position: 'absolute'}}>
              POSTO DE SAÚDE VILA MARIA
            </Text>
          </TopCardFindHealthUnity>
          <ButtonOpemMaps onPress={OpemMapsVilaMaria}>
            <Icon
              name="navigation"
              size={22}
              color="#fff"
              style={{marginTop: 5, marginRight: 10}}
            />
            <Text
              style={{
                color: '#fff',
                fontSize: 22,
                marginRight: 30,
              }}>
              IR PARA O MAPS
            </Text>
          </ButtonOpemMaps>
        </CardFindHealthUnity>

        <CardFindHealthUnity>
          <TopCardFindHealthUnity
            onPress={() => navigation.navigate('CamposAltos')}>
            <NumberUnityHealth>12</NumberUnityHealth>
            <Text style={{position: 'absolute'}}>
              POSTO DE SAÚDE CAMPOS ALTOS
            </Text>
          </TopCardFindHealthUnity>
          <ButtonOpemMaps onPress={OpemMapsCampusAltos}>
            <Icon
              name="navigation"
              size={22}
              color="#fff"
              style={{marginTop: 5, marginRight: 10}}
            />
            <Text
              style={{
                color: '#fff',
                fontSize: 22,
                marginRight: 30,
              }}>
              IR PARA O MAPS
            </Text>
          </ButtonOpemMaps>
        </CardFindHealthUnity>

        <CardFindHealthUnity>
          <TopCardFindHealthUnity
            onPress={() => navigation.navigate('Serrinha')}>
            <NumberUnityHealth>13</NumberUnityHealth>
            <Text style={{position: 'absolute'}}>POSTO DE SAÚDE SERRINHA</Text>
          </TopCardFindHealthUnity>
          <ButtonOpemMaps onPress={OpemMapsSerrinha}>
            <Icon
              name="navigation"
              size={22}
              color="#fff"
              style={{marginTop: 5, marginRight: 10}}
            />
            <Text
              style={{
                color: '#fff',
                fontSize: 22,
                marginRight: 30,
              }}>
              IR PARA O MAPS
            </Text>
          </ButtonOpemMaps>
        </CardFindHealthUnity>
      </ScrowCardsContainer>
    </Container>
  );
};

export default LocationHealth;
