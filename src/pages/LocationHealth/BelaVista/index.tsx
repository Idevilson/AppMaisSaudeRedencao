import React from 'react';
import {Text} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  Header,
  BackButton,
  InformationScroll,
  Title,
  ImageDivider,
  Content,
} from './styles';

const BelaVista: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={30} color="#fff" />
        </BackButton>
        <Text style={{marginLeft: 5, color: '#fff', fontSize: 22}}>
          ESF I - MARIA DE JESUS ALVES
        </Text>
      </Header>
      <InformationScroll>
        <Title>{`UNIDADE DE SAÚDE
SETOR BELA VISTA`}</Title>
        <ImageDivider source={require('../assets/line.png')} />
        <Title>{'ATENDIMENTO MÉDICO'}</Title>
        <Content>{'Drª Juliana Diniz - Período Matutino'}</Content>

        <ImageDivider source={require('../assets/line.png')} />
        <Title>{'Enfª COORDENADORA'}</Title>
        <Content>{'Valquíria de Jesus'}</Content>
        <Content>{'Horário: das 7h às 11h e 13h às 17h'}</Content>

        <ImageDivider source={require('../assets/line.png')} />
        <Title>{'Técnica enfermagem'}</Title>
        <Content>{'Dayane Silva'}</Content>
        <Content>{'Triagem e Curativos'}</Content>
        <Content>{'7h às 11h e 13h às 17h'}</Content>

        <ImageDivider source={require('../assets/line.png')} />
        <Title>{'Técnica enfermagem'}</Title>
        <Content>{'Vânia Silva'}</Content>
        <Content>{'Sala de Vacina'}</Content>
        <Content>{'das 8h às 14h'}</Content>

        <ImageDivider source={require('../assets/line.png')} />
        <Title>{'ATENDIMENTOS OFERECIDOS'}</Title>
        <Content>{'CONSULTA MÉDICA'}</Content>
        <Content>{'ENFERMAGEM EM GERAL'}</Content>
        <Content>{'REALIZAÇÃO DO PCCU'}</Content>
        <Content>{'CURATIVOS'}</Content>
        <Content>{'VACINA VISITAS DOMICILIARES'}</Content>
        <Content>{'NASF'}</Content>
      </InformationScroll>
    </Container>
  );
};

export default BelaVista;
