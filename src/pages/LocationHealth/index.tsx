import React from 'react';
import {Text} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import {createOpenLink} from 'react-native-open-maps';

import {useNavigation} from '@react-navigation/native';

const OpemMapsPlanaltoII = createOpenLink({
  latitude: -8.057294,
  longitude: -50.041577,
  end: 'R. Olga Lustosa ',
  navigate_mode: 'navigate',
});

const OpemMapsAtilaDouglas = createOpenLink({
  latitude: -8.055685,
  longitude: -50.018156,
  zoom: 50,
  end: 'Posto de saúde Maria Francinete Lima Da Silva',
});

const OpemMapsVilaDaPedra = createOpenLink({
  latitude: -8.033373,
  longitude: -50.046152,
  zoom: 50,
  end: 'Posto de saúde Maurina Pinto da Costa',
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

          <ButtonOpemMaps onPress={() => {}}>
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
          <ButtonOpemMaps onPress={() => {}}>
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
          <ButtonOpemMaps onPress={() => {}}>
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
          <ButtonOpemMaps onPress={() => {}}>
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
          <ButtonOpemMaps onPress={() => {}}>
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
              POSTO DE SAÚDE SETOR AV. ARAGUAIA
            </Text>
          </TopCardFindHealthUnity>
          <ButtonOpemMaps onPress={() => {}}>
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
          <ButtonOpemMaps onPress={() => {}}>
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
          <ButtonOpemMaps onPress={() => {}}>
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
          <ButtonOpemMaps onPress={() => {}}>
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
          <ButtonOpemMaps onPress={() => {}}>
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
