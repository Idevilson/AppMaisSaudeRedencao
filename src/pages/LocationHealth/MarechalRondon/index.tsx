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

const MarechalRondon: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={30} color="#fff" />
        </BackButton>
        <Text style={{marginLeft: 40, color: '#fff', fontSize: 22}}>
          ESF - JOSÉ SOARES
        </Text>
      </Header>
      <InformationScroll>
        <Title>{`UNIDADE DE SAÚDE
SETOR MARECHAL RONDON`}</Title>
        <ImageDivider source={require('../assets/line.png')} />
        <Title>{'ATENDIMENTO MÉDICO'}</Title>
        <Content>{'Dr. Jhonatan Noleto'}</Content>
        <Content>{'Período: Manhã e Tarde'}</Content>

        <ImageDivider source={require('../assets/line.png')} />
        <Title>{'Enfª COORDENADOR'}</Title>
        <Content>{'Wyllielon dos Santos'}</Content>
        <Content>{'Horário: das 7h às 12h e 14h às 17h'}</Content>

        <ImageDivider source={require('../assets/line.png')} />
        <Title>{'Técnico de enfermagem'}</Title>
        <Content>{'Leudina de Alencar Oliveira'}</Content>
        <Content>{'Triagem e Curativos'}</Content>
        <Content>{'7h às 11h e 13h às 17h'}</Content>

        <ImageDivider source={require('../assets/line.png')} />
        <Title>{'Técnica enfermagem'}</Title>
        <Content>{'Lucilia Resplandes de Oliveira'}</Content>
        <Content>{'Sala de Vacina'}</Content>
        <Content>{'das 8h às 14h'}</Content>

        <ImageDivider source={require('../assets/line.png')} />
        <Title>{'ATENDIMENTOS OFERECIDOS'}</Title>
        <Content>{'CONSULTA MÉDICA'}</Content>
        <Content>{'ENFERMAGEM EM GERAL'}</Content>
        <Content>{'REALIZAÇÃO DO PCCU'}</Content>
        <Content>{'CURATIVOS'}</Content>
        <Content>{'VACINA'}</Content>
        <Content>{'VISITAS DOMICILIARES'}</Content>
        <Content>{'PLANEJAMENTO FAMILIAR'}</Content>
        <Content>{'ENTREGA DE PRESERVATIVOS'}</Content>
        <Content>{'E ANTICONCEPCIONAIS'}</Content>
      </InformationScroll>
    </Container>
  );
};

export default MarechalRondon;
