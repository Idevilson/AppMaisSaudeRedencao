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

const AltoParana: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={30} color="#fff" />
        </BackButton>
        <Text style={{marginLeft: 35, color: '#fff', fontSize: 22}}>
          ESF - LAÉRCIO BARBALHO
        </Text>
      </Header>
      <InformationScroll>
        <Title>{`UNIDADE DE SAÚDE
ALTO PARANÁ`}</Title>
        <ImageDivider source={require('../assets/line.png')} />
        <Title>{'ATENDIMENTO MÉDICO'}</Title>
        <Content>{'Dra Carolina Akemi / Período: Matutino'}</Content>

        <ImageDivider source={require('../assets/line.png')} />
        <Title>{'Enfª COORDENADORA'}</Title>
        <Content>{'Sonia Mendonça'}</Content>
        <Content>{'Horário: das 7h às 11h e 13h às 17h'}</Content>

        <ImageDivider source={require('../assets/line.png')} />
        <Title>{'Técnica enfermagem'}</Title>
        <Content>{'Ednalva'}</Content>
        <Content>{'Triagem e Curativos'}</Content>
        <Content>{'7h às 11h e 13h às 17h'}</Content>

        <ImageDivider source={require('../assets/line.png')} />
        <Title>{'Técnica enfermagem'}</Title>
        <Content>{'Lucirene'}</Content>
        <Content>{'Sala de Vacina'}</Content>
        <Content>{'das 8h às 14h'}</Content>

        <ImageDivider source={require('../assets/line.png')} />
        <Title>{'Atendimento Psicológico'}</Title>
        <Content>{'Drª Gleice G. Tempone'}</Content>
        <Content>{'(Agendamento feito na Regulação)'}</Content>

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
        <Content>{'ATENDIMENTO ODONTOLÓGICO'}</Content>
        <Content>{'ATENDIMENTO PSICOLÓGICO'}</Content>
        <Content>{'NASF'}</Content>
      </InformationScroll>
    </Container>
  );
};

export default AltoParana;
